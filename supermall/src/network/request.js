import axios from 'axios'
export function request(config) {
  const instance = axios.create(
    {
      baseURL: 'http://106.54.54.237:8000/api/wh',
      timeout: 5000
    }
  )
  instance.interceptors.request.use(
    config => {
      //拦截config之后要返回 不然会请求失败
      return config
    }, error => {
    })

  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, error => {
    // console.log(error);
  })
  return instance(config)
}
