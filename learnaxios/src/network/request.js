import axios from 'axios'
// export function request(config,success,failure) {
//   const instance = axios.create(
//     {
//       baseURL:'http://106.54.54.237:8000/api/hy',
//       timeout:5000
//     }
//   )
//
//   instance(config).then(res=>{
//     success(res)
//   }).catch(err=>{
//     failure(err)
//   })
// }

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create(
//       {
//         baseURL: 'http://106.54.54.237:8000/api/hy',
//         timeout: 5000
//       }
//     )
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

export function request(config) {
  const instance = axios.create(
    {
      baseURL: 'http://106.54.54.237:8000/api/hy',
      timeout: 5000
    }
  )
  instance.interceptors.request.use(
    config => {
      console.log(config);
      //拦截config之后要返回 不然会请求失败
      return config
    }, error => {
      console.log(error);
    })

  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, error => {
    console.log(error);
  })
  return instance(config)
}
