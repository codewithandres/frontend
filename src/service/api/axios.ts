import axios from 'axios';

export const makeRequest = axios.create({
	baseURL: 'http://localhost:8080/api',
	withCredentials: true,
});

makeRequest.interceptors.response.use(
	response => response,
	error => {
		console.error('API Error:', error.response?.data?.message || error.message);
		return Promise.reject(error);
	}
);
