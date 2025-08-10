// src/services/api.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // Vite env access

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {}
});

// Search users: https://api.github.com/search/users?q={query}
export async function searchUsers(query, page = 1) {
  const res = await api.get("/search/users", {
    params: { q: query, page, per_page: 30 },
  });
  return res.data; // { total_count, items: [...] }
}

// Get user details
export async function getUser(username) {
  const res = await api.get(`/users/${username}`);
  return res.data;
}
export async function searchUsers(query) {
  const res = await api.get('/search/users', { params: { q: query } });
  return res.data;
}
