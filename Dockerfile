FROM node:erbium-alpine as builder
# Jan 2021: need to force Node 12.x LTS for the time being, because:
# react-scripts 4.0.1 depends on chokidar 2.1.8 which purportedly breaks on Node 14
# https://github.com/facebook/create-react-app/issues/9431
# https://github.com/GoogleChrome/workbox/issues/2609

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm ci
COPY . .
RUN npm run build

# FROM apadregistry.azurecr.io/nginx-brotli-csp-nonce
FROM fholzer/nginx-brotli:v1.19.1

# Set up logging to stdout and stderr (necessary on alpine)
RUN ln -sf /dev/stdout /var/log/nginx/access.log \ && ln -sf /dev/stderr /var/log/nginx/error.log

# Create a backup of the config "as shipped"
RUN cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.default

# Enable react-router, serve precompressed static files
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Enable headers and compression
COPY docker/nginx/http_headers.conf docker/nginx/compression.conf /etc/nginx/

# Injection script, intended to run one time on container init
COPY docker/config-injection.sh /docker-entrypoint.sh

COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "/docker-entrypoint.sh"]
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
