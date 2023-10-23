// ts
// 操作符keyof、typeof、in

// keyof可以获取一个类型的所有键值，返回联合类型
type Person3 = {
  name: string;
  age: number;
}


type PersonKey = keyof Person3;