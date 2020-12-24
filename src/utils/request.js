import axios from 'axios'
const request = axios.create({
  baseURL:"https://book.youbaobao.xyz:18082",
  timeout:5000
})
request.interceptors.response.use(
  response=>{
    if(response.status == 200 && response.data){
      return response.data
    }else{
     return Promise.reject(new Error('请求失败'))
    }
  },
  err=>Promise.reject(err)
)
export default request