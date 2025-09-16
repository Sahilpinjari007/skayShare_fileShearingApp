import API from "../../utils/axios";


export const addUserContact = async (payload) => {
  const response = await API.post('/api/v1/contact/add', payload);
  return response.data;
};

export const getUserContact = async () => {
  const response = await API.get('/api/v1/contact/get');
  return response.data;
};

export const searchUserContact = async (query) => {
  const response = await API.get(`/api/v1/contact/search?q=${query}`);
  return response.data;
};

