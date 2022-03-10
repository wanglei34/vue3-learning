//定义对象
function Player(name, age) {
  this.name = name
  this.age = age
}
//定义对象的成员函数
Player.prototype.toPrint = function () {
  console.log(this.name + '---' + this.age)
}
var player1 = new Player('james', 35)
var player2 = new Player('kobe', 39)
//调用成员函数
player1.toPrint() //james---35
player2.toPrint() //kobe---39
