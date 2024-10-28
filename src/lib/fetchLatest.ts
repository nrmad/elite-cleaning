import axios from "./axiosConfig";

export const fetchLatest = async () => {
  const res = await axios.get(`/api/projects/latest`);
  return res.data;
};
