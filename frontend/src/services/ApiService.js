import axiosInstance from './axiosInstance';

class APIService {
  getProducts = () => this.get('/api/products');
  getComponents = () => this.get('/api/components');
  get = (url) => axiosInstance.get(url);
  post = (url, data) => axiosInstance.post(url, data);
  delete = (url) => axiosInstance.delete(url);
  patch = (url) => axiosInstance.patch(url);
  put = (url, data) => axiosInstance.put(url, data);

  // Check User Log or not
  isLoggedIn = () => {
    return localStorage.getItem('token') ? true : false;
  };
}

let apiService = new APIService();
export default apiService;
