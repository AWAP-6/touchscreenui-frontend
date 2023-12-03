import axios from 'axios';

const baseURL = 'http://localhost:8080/lockers';

export const checkOpenCode = (openCode) => {
    return axios.get(`${baseURL}/checkOpenCode`, {
      params: { openCode }
  });
};

export const checkLockerStatus = (openCode) => {
  return axios.get(`${baseURL}/lockerStatus`, {
    params: { openCode }
  });
};

export const updateLockerStatus = (openCode, status) => {
  return axios.post(`${baseURL}/updateStatus?openCode=${openCode}&status=${status}`);
};