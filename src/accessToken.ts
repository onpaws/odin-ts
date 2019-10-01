let accessToken = "";

export const setAccessToken = (token: string) => {
  accessToken = token;
  console.log('token', token)
};

export const getAccessToken = () => {
  return accessToken;
};