export const getVitals = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
  const result = await response.json();
  return result;
};
