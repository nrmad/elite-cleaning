import axios from "./axiosConfig";

export const fetchSector = async (param: number) => {
  const res = await axios.get(`/api/projects/sectors/${param}`);
  return res.data;
};
