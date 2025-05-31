import axios from "axios";
import { Article } from "../models/Article";

const API_KEY = "029fd1d481a04598bc01a36e1b43a1a3";
const BASE_URL = "https://newsapi.org/v2";

export const getWSJNews = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        domains: "wsj.com",
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const fetchTopHeadlines = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: "us",
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching headlines:", error);
    throw error;
  }
};
