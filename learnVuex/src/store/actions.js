export default {
  //可以穿参数 类似于mutations,可以传递回调参数来通知异步事件已经完成
  //第一种方法
  /* aUpdateInfo(context, payload) {
     setTimeout(() => {
       context.commit('updateInfo')
       console.log(payload.message);
       payload.success()
     }, 1000)
   }*/

  //2.使用Promise通知事件完成的回调
  aUpdateInfo(context, payload) {
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload);
        console.log('异步事件已完成,准备回调')
        resolve('回调已完成')
      }, 1000)
    })
  }
}
