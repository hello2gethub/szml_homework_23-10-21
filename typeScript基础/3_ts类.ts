
// public
// private 私有的，只有自己这个类可用
// protected 可以在当前类或者派生类中使用
// readonly 只读

class Person2 {
  private name = 'a';
  public fn = () => {};
  readonly sex = "男";
  protected age = 18;
}

class Student extends Person2 {
  age = 19;
}

let person2 = new Person2();
 //console.log(person2.name)
console.log(person2.fn)
console.log(person2.sex)
//console.log(person2.age)

