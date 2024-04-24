import axios from 'axios'

class Service {
  static http = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {'Content-Type': 'application/json'},
  });
}

export default Service;