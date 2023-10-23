
// ts中当函数为可选参数时候 在冒号前面加个问号，例如下面的a

function sum(a: number, b: number, c?: number): number {
  return c ? a+b+c : a + b;
}


// interface 接口， 可以用来约束函数、对象、类，但是不能约束基础类型

interface Fn {
  (a:string): void
}

const f1:Fn = () => {};

// 约束对象
interface Person {
  name: string,
  age: number,
  [key:string]:any, // 索引签名
}

const p1:Person = {
  name: '',
  age: 123,
  arr: [],
}

// type 另外一种约束方法，或者说一个类型的集成, 除了基础类型，他也可以约束方法、类、对象
type ID = string | number;
let id:ID = 123;
id = '123';