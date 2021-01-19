#!/usr/bin/env sh
set -e

# Config injection
# Maintainer: Patrick Skinner <pas8314@gmail.com>

# Purpose: Intended to allow the orchestrator/image invoker (e.g. Kubernetes/Docker) to, at container init time:
# • override the SPA's backend endpoint (e.g. %%BASEURL%% -> http://example.com/api/)
# • enable Content Security Policy

echo 'Welcome to container surgery'
echo We are going to replace "__REACT_APP_HTTP_BE__" with provided value: ${HTTP_BE}
: "${HTTP_BE?Need to set HTTP_BE}"
echo We are going to replace "__REACT_APP_WS_BE__" with provided value: ${WS_BE}
: "${WS_BE?Need to set WS_BE}"

# We grep for all files with the __REACT_APP_HTTP_BE__ token
cd /usr/share/nginx/html/static/
FILES=$(grep -rl __REACT_APP_HTTP_BE__ .)
for FILE in $FILES; do
  echo "Injecting ${HTTP_BE} into ${FILE}"
  sed -i "s~__REACT_APP_HTTP_BE__~${HTTP_BE}~g" ${FILE}
done

FILES=$(grep -rl __REACT_APP_WS_BE__ .)
for FILE in $FILES; do
  echo "Injecting ${HTTP_WS} into ${FILE}"
  sed -i "s~__REACT_APP_HTTP_WS__~${HTTP_WS}~g" ${FILE}
done

# Optionally enable Content Security Policy when user passes in ENABLE_CSP env var
if [ -z "$ENABLE_CSP" ]
then
  echo "ENABLE_CSP not found; leaving Content-Security-Policy-Report-Only as is"
else
  echo "ENABLE_CSP env var detected; we are going to enable Content Security Policy..."
  cd /etc/nginx/
  FILES=$(grep -rl "add_header Content-Security-Policy-Report-Only" .)
  for FILE in $FILES
  do
    echo "Enabling CSP in ${FILE}"
    sed -i "s~add_header Content-Security-Policy-Report-Only~add_header Content-Security-Policy~g" ${FILE}
  done
fi

echo 'Launch nginx'
exec "$@"