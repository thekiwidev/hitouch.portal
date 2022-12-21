import { createContext, useState } from "react";

import axios from "axios";

export const PersonalContext = createContext();

export function PersonalProvider({ children }) {
  const [info, setInfo] = useState({});
  const [status, setStatus] = useState("pending"); // idle, pending, fulfilled, rejected
  const [message, setMessage] = useState("");

  // axios
  const API_URL = `/api/users/info/personal/`;

  const getInfo = async (token) => {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(API_URL, config)
      .then((res) => {
        setStatus("pending");
        return res.json();
      })
      .then((data) => {
        setStatus("fulfilled");
        setInfo(data[0]);
      })
      .catch((err) => {
        console.log(err);
        const message =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        setStatus("rejected");
        setMessage(message);
      });
  };

  const updateInfo = async (token, id, updatedInfo) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .put(API_URL + id, updatedInfo, config)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        setMessage(err.message);
        setStatus("rejected");
      });
  };

  return (
    <PersonalContext.Provider
      value={{ info, status, message, getInfo, updateInfo }}
    >
      {children}
    </PersonalContext.Provider>
  );
}

export default PersonalContext;
