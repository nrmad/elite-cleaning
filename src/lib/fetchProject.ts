import axios from "./axiosConfig";

export const fetchProject = async (param: string) => {
  const res = await axios.get(`/api/projects/${param}`);
  return res.data;
};
