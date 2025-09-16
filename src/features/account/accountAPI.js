import API from "../../utils/axios";


export const uploadUserAvatar = async (userData) => {
  const response = await API.post('/api/v1/user/upload-avatar/', userData);
  return response.data;
};

export const deleteUserAvatar = async () => {
  const response = await API.delete('/api/v1/user/delete-avatar/');
  return response.data;
};

export const updateUserName = async (userData) => {
  const response = await API.put('/api/v1/user/update-name/', userData);
  return response.data;
};

export const resetUserPassword = async (userData) => {
  const response = await API.post('/api/v1/user/reset-password/', userData);
  return response.data;
};

export const deleteUserAccount = async () => {
  const response = await API.delete('/api/v1/user/delete-account/');
  return response.data;
};
