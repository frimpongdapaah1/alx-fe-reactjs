// src/services/githubService.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional GitHub token

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
});

/**
 * Fetch GitHub users with advanced search
 * @param {string} username - GitHub username (can be partial)
 * @param {string} location - Optional location filter
 * @param {string|number} minRepos - Optional minimum repos filter
 * @param {number} page - Pagination page number
 */
export async function searchUsers(username, location = "", minRepos = "", page = 1) {
  // Build query string
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  // Example: https://api.github.com/search/users?q=john+location:london+repos:>10
  const url = `https://api.github.com/search/users?q=${query}`;

  const res = await api.get(url, {
    params: { page, per_page: 30 },
  });
  return res.data;
}
