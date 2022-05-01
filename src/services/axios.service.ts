import axios from 'axios'

export const $axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

$axios.interceptors.request.use(req => {
  req.params.apikey = process.env.VUE_APP_ACCU_KEY
  return req
})

$axios.interceptors.response.use(res => {
  return res.data
})
