import axios from "axios";
const service = axios.create({
  baseURL: process.env.MIX_BASE_API,
  timeout: 5000
});
service.interceptors.response.use(res => {
  return res && res.data;
});
export function getNews() {
  const url =
    "https://newsapi.org/v2/everything?q=bitcoin&from=&sortBy=publishedAt&apiKey=74578f2ca3c947a39c10cf5bf9f9062b";
  return service.get(url);
}
