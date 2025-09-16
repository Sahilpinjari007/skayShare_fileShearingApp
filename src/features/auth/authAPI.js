import API from "../../utils/axios";


export const autoLoginUser = async () => {
  const response = await API.get('/api/v1/user/auto-login/');
  return response.data;
};

export const logOutUser = async () => {
  const response = await API.get('/api/v1/user/logout/');
  return response.data;
};
