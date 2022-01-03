export const getToken = () => {
  return localStorage.getItem("Auth Token");
};

export const UserId = () => {
  return localStorage.getItem("UserId");
};
