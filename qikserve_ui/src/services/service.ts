import axios from 'axios'
import {AxiosStatic} from "axios/index";

axios.defaults.baseURL = 'http://localhost:8080';

class Service {
  static http = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {'Content-Type': 'application/json'},
  });
}

export default Service;