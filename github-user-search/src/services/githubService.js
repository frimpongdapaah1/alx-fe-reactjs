import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {}
});

// REQUIRED by task: fetchUserData()
export async function fetchUserData(username) {
  const res = await api.get(`/users/${username}`);
  return res.data;
}
