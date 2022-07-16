export const getHello = async () => {
  const response = await fetch("/api/hello", {
    method: 'get',
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  const data = await response.json();
  console.log(data);

  return data;
};

getHello();