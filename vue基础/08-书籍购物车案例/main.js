const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-9',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《java》',
        date: '2006-9',
        price: 85.00,
        count: 1
      }
    ]
  },
  methods: {
    add(index) {
      this.books[index].count++;
    },
    sub(index) {
      this.books[index].count--;
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }
    // getFinalPrice(price){
    //   return '￥'+price.toFixed(2)
    // }
  },
  computed: {
    totalPrice() {
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;
      return this.books.reduce((preValue, book) => preValue + book.price * book.count, 0)
    }
  },
  //过滤器
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
});