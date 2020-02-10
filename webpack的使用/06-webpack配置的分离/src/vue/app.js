export default{
  template:`
  <div>
    <h2>{{message}}</h2>
    <p>{{name}}</p>
  </div>
  `,
  data(){
    return{
      message:'Hello webpack',
      name:'jeft'
    }
  }
};