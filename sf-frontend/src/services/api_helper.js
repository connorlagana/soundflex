import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const api_helper = (resp) => {
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const makeNewMix = async (musicData) => {
  api.post("/", musicData);
  // return api_helper(resp);
};
