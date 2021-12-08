import axios from "axios";

// const URL = "http://localhost";
//const URL = "https://chatbot-spring.herokuapp.com";
const URL =
  "http://ec2-54-180-100-104.ap-northeast-2.compute.amazonaws.com:8080";

export const getHello = async () => {
  const response = await axios.get(URL + "/hello/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
};

getHello();
