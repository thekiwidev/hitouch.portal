import axios from "axios";

const API_URL = "/api/users/info/personal/";

// Get Info
const getInfo = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data[0];
};

// Update info
const updateInfo = async (token, id, updatedInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id, updatedInfo, config);

  return response.data;
};

const personalInfoService = {
  getInfo,
  updateInfo,
};

export default personalInfoService;
