import axios from 'axios';
import { LOCAL_STORAGE } from '../lib/helpers/constants';

export const $api = axios.create({
	baseURL: __API_BASE_URL__, 
	headers: {
		Authorization: localStorage.getItem(LOCAL_STORAGE.USER)
	}
});