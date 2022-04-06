import axiosInstance from './axiosInstance';

class APIService {
  getProducts = () => this.get('/api/products');
  getComponents = () => this.get('/api/components');
  get = (url) => axiosInstance.get(url);
  post = (url, data) => axiosInstance.post(url, data);
  deleteProduct = (url) => axiosInstance.delete(url);
  deleteComponent = (url) => axiosInstance.delete(url);
  put = (url, data) => axiosInstance.put(url, data);
}

let apiService = new APIService();
export default apiService;
