export default {
  //方法
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state, count) {
    //1.普通提交获取
    // state.counter += count
    //2.使用payload封装提交获取
    state.counter += count.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    //可以响应式
    state.info.name = 'jeft'

    //不可以响应式
    // state.info['address'] = 'earth'

    //可以响应式
    // Vue.set(state.info, 'address','earth')

    //不可以响应式
    // delete state.info.age

    //可以响应式
    // Vue.delete(state.info, 'age')


  }
}
