import API from "../../utils/axios";

export const createUserTransfer = async (payload, onProgress, signal) => {
  const response = await API.post("/api/v1/transfer/create", payload.formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (event) => {
      if (onProgress) {
        console.log(
          "Progress",
          Math.round((event.loaded * 100) / event.total),
          event.loaded,
          event.total
        );

        onProgress({
          percent: Math.round((event.loaded * 100) / event.total),
          loaded: event.loaded,
          total: event.total,
        });
      }
    },
    signal,
  });

  return response.data;
};

export const getUserTransferById = async (params) => {
  const response = await API.get(`/api/v1/transfer/get/${params}`);
  return response.data;
};

export const getUserSentTransfers = async () => {
  const response = await API.get(`/api/v1/transfer/sent/get`);
  return response.data;
};

export const getUserRecivedTransfers = async () => {
  const response = await API.get(`/api/v1/transfer/recived/get`);
  return response.data;
};

export const searchUserTransfer = async (payload) => {
  const response = await API.get(
    `/api/v1/transfer/search/?q=${payload.searchQuery}&action=${payload.action}`
  );
  return response.data;
};

export const deleteUserTransferById = async (params) => {
  const response = await API.delete(`/api/v1/transfer/delete/${params}`);
  return response.data;
};

export const updateUserTransferPassword = async (payload) => {
  const response = await API.put(
    `/api/v1/transfer/password/${payload?.transferId}`,
    payload
  );
  return response.data;
};

export const validateUserTransferPassword = async (payload) => {
  const response = await API.post(
    `/api/v1/transfer/validate-password/${payload.id}`,
    payload
  );
  return response.data;
};
