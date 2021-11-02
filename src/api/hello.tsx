import axios from "axios";

const URL = "https://localhost:8080/";

export const getHello = async () => {
  const response = await axios.get(URL + "value");
  return response.data;
};

export const postHello = async (msg: string) => {
  const response = await axios.put(URL + "value", msg);
  return response.data;
};

getHello();
postHello("안녕 챗봇!");
