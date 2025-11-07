export const isValidUrl = (url: string) => {
  const regex = /^https?:\/\/.+/i;
  return regex.test(url);
};
