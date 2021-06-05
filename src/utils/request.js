import axios from 'axios'
const service = axios.create({
    // baseURL:  'https://bpmplus.58v5.cn/' , // url = base url + request url
    // timeout: 30000, // request timeout
    // headers: { 'X-Requested-With': 'XMLHttpRequest' },
})

// service.interceptors.request.use(
    
// )
// service.interceptors.response.use(
    
// )

export default service