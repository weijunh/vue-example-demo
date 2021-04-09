import ajax from './ajax'

// 定义一个常量,设置地址
const BASE = '/api'
//用分别暴露出去
export const reqCategorys = () => ajax({
    // method: 'GET',
    // url: BASE + `/index_category`,
    // headers:{
    //   needToken:true // 标识:需要携带token
    // }
})
