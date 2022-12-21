import axios from "axios";

const API_URL = "/api/users/info/visa/";

const getInfo = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data[0];
};
const updateInfo = async (token, id, updatedInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id, updateInfo, config);

  return response.data[0];
};

const visaService = {
  getInfo,
  updateInfo,
};

export default visaService;
