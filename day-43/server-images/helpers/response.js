module.exports = (status, message, data = []) => {
  return {
    status,
    message,
    data,
  };
};
