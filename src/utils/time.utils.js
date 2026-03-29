const formatTimestamp = (date = new Date()) => {
  return date.toISOString();
};

export { formatTimestamp };