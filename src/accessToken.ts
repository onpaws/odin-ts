// The access_token is ephemeral and deliberately not set in localStorage/cookies

let accessToken = "";

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const getAccessToken = () => {
  return accessToken;
};