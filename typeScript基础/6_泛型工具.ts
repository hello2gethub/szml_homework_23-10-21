// Partial<T> 把所有的类型对象全部变成可选,就是在冒号前面加一个问号
type Animal = {
  name: string,
  age: number,
  eat: () => number;
}

type PartialAnimal = Partial<Animal>

let obj: PartialAnimal = {};

// Partial 源码
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

type MyPartialTest = MyPartial<Animal>
let obj2: MyPartialTest = {};


// Required<T> 把所有参数变为必选

// Record<K,T> 声明一个对象的key和value类型

// Pick<T, K> 从类型对象中取出指定的属性类型

// Omit<T, K> 从类型对象中排除指定属性，取出其它属性

// ReturnType<T> 返回值类型