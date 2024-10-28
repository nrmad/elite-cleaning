// lib/inquiry.js
import axios from "./axiosConfig";

export interface InquiryData {
  email: string;
  message: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
}

export const postInquiry = async (
  inquiryData: InquiryData
): Promise<InquiryResponse> => {
  const res = await axios.post(`/api/contact/inquiry`, inquiryData);
  return res.data;
};
