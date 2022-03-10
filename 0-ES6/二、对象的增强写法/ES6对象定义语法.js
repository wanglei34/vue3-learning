//定义对象
class Player {
  //定义构造函数
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  //定义成员方法
  toPrint() {
    console.log(this.name + '---' + this.age)
  }
}
var player1 = new Player('james', 35)
player1.toPrint() //james---35

//extends关键字实现继承
class BestPlayer extends Player {
  constructor(name, age) {
    //super关键字调用父类构造方法
    super()
    this.name = 'jordan'
    this.age = 49
  }
}
let bestPlayer = new BestPlayer()
bestPlayer.toPrint() //jordan---49 */

/* //字面量定义对象简写
let name = 'curry'
let age = 33
let player3 = {
  name: name,
  age: age,
  toPrint: function () {
    console.log(player3)
  },
}
player3.toPrint() */

//使用语法糖简写
let name = 'curry'
let age = 33
let player3 = {
  name: name,
  age: age,
}
console.log(player3)
