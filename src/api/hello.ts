// const URL = "http://localhost";
const URL = "https://chatbot-spring.herokuapp.com";
// const URL = "http://ec2-54-180-100-104.ap-northeast-2.compute.amazonaws.com:8080";

export const getHello = async () => {
  const response = await fetch(URL + "/hello/", {
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