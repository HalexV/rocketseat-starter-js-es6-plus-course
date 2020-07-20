import axios from 'axios';

const api = axios.create({ //Cria uma configuração do axios
  baseURL: 'https://api.github.com', //Todas as requisições vão partir deste endereço.
});

export default api;