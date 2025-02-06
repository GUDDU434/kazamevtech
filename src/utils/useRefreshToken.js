/* eslint-disable */
import { axiosInstance } from "./axiosInstance";

const useRefreshToken = () => {
  const refresh = async () => {
    const refreshToken = localStorage.getItem("refreshToken") || "";
    const response = await axiosInstance.post("/auth/refresh", {
      refreshToken,
    });

    localStorage.setItem("accessToken", response?.data?.data);
    return response?.data?.data;
  };
  return refresh;
};

export default useRefreshToken;
