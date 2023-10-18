import axios from 'axios';

export function CreateAxios(baseUrl: string) {
  return axios.create({
    baseURL: baseUrl,
  });
}
