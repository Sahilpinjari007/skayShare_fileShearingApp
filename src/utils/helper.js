export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / Math.pow(1024, i);
  return size.toFixed(2) + " " + sizes[i];
};

export const transferSize = (files) => {
  const totalSize = files?.reduce((acc, file) => acc + file.size, 0)
  return formatFileSize(totalSize)
};

export const objectToFormData = (obj) => {
  const fd = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        fd.append(key, item);
      });
    } else {
      fd.append(key, value);
    }
  });
  return fd;
};

export const validateFileSize = (file) => {
  const IMAGE_MAX = 10 * 1024 * 1024; // 10 MB
  const VIDEO_MAX = 40 * 1024 * 1024; // 40 MB

  if (file?.type.startsWith("image/")) {
    if (file?.size > IMAGE_MAX) {
      return `Image too large! Max allowed size is 10 MB.`;
    }
  } else if (file?.type.startsWith("video/")) {
    if (file?.size > VIDEO_MAX) {
      return `Video too large! Max allowed size is 40 MB.`;
    }
  } else {
    if (file?.size > IMAGE_MAX && file?.isFolder) {
      return `Folder too large! Max allowed size is 10 MB.`;
    } else if (file?.size > IMAGE_MAX) {
      return `File too large! Max allowed size is 10 MB.`;
    }
  }

  return null; // ✅ means valid
};

export const timeAgo = (date) => {
  const now = new Date();
  const seconds = Math.floor((now - new Date(date)) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (let key in intervals) {
    const interval = Math.floor(seconds / intervals[key]);
    if (interval >= 1) {
      return `${interval} ${key}${interval > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
};

export const expiresIn = (date) => {
  const now = new Date();
  const seconds = Math.floor((new Date(date) - now) / 1000);

  if (seconds <= 0) return "Expired";

  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (let key in intervals) {
    const interval = Math.floor(seconds / intervals[key]);
    if (interval >= 1) {
      return `Expires in ${interval} ${key}${interval > 1 ? "s" : ""}`;
    }
  }
  return "Expires in a few seconds";
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}