import axios from "axios";

const API_URL = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list';

const getTodolist = () => {
  return axios.get(API_URL);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTodolist };