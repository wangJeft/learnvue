export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  more15Stu(state) {
    return state.students.filter(s => s.age > 15)
  },
  //可以调用getter,第二个参数怎么都是getter,无论写什么名字
  more15StuLength(state, getter) {
    return getter.more15Stu.length
  },
  //获取外部传入的参数做操作
  moreAgeStu(state) {
    // return function (age) {
    //   return state.students.filter(s => s.age > age)
    // }
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }

}
