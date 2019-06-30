import axios from "axios";

const api = axios.create({
	baseURL: 'http://192.168.0.104:3000/api' //isadora
	// baseURL: "http://192.168.0.101:3000/api" //willian
	//  baseURL: 'http://172.23.147.231:3000/api' //escola
});

export default api;
