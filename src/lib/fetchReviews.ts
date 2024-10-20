import axios from "./axiosConfig";

export const fetchReviews = async () => {
  const res = await axios.get("/api/reviews");
  return res.data;
};
