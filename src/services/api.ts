import axios from "axios";

const API_BASE = "https://api.cosmosphere.ai"; // placeholder

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const fetchDailyHoroscope = (sign: string) => api.get(`/api/horoscope/daily`, { params: { sign } });
export const fetchWeeklyHoroscope = (sign: string) => api.get(`/api/horoscope/weekly`, { params: { sign } });
export const fetchMonthlyHoroscope = (sign: string) => api.get(`/api/horoscope/monthly`, { params: { sign } });
export const fetchCompatibility = (sign1: string, sign2: string) => api.get(`/api/compatibility`, { params: { sign1, sign2 } });
export const fetchKundli = (data: any) => api.post(`/api/kundli`, data);
export const fetchMoonPhase = () => api.get(`/api/moon-phase`);
export const fetchPlanets = () => api.get(`/api/planets`);

export default api;
