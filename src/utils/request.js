import axios from 'axios'

const REQUEST = axios.create({
  baseURL: 'https://5c095f39ea3172001389cd69.mockapi.io/instagram/'
})

export { REQUEST }