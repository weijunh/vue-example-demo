import axios from "axios";


// 添加请求拦截器
axios.interceptors.request.use(config => {

    return config
})


axios.interceptors.response.use(response=>{
    return response.data
},error => {

    // 中断当前的错误消息,继续的响应
    return new Promise(() => { })
})
export default axios
