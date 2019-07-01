import axios from "axios";

const api = axios.create({
	//baseURL: 'http://192.168.0.104:3000/api' //isadora
	// baseURL: "http://192.168.0.101:3000/api" //willian
	//baseURL: "http://192.168.1.7:3000/api" //willian2
	//  baseURL: 'http://172.23.147.231:3000/api' //escola
	baseURL: "http://192.168.42.32:3000/api" //escola
});

export default api;
