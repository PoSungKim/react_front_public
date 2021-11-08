import axios from "axios";

//const URL = "http://localhost:8080";
const URL = "https://chatbot-spring.herokuapp.com";

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
