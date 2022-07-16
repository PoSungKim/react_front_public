import axios from "axios";

const URL = "https://chatbot-spring.herokuapp.com";

export const getUsers = async () => {
  return await axios.get(URL + "/users", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};