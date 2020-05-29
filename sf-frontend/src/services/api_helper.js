import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});
const { spawn } = require("child_process");

const makeNewMix = async (musicData) => {
  await api.post("/", musicData);
};

export default makeNewMix;
