import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const api_helper = (resp) => {
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

const makeNewMix = async (musicData) => {
  const resp = await api.post("/", musicData);
  return api_helper(resp);
};

export default makeNewMix;
