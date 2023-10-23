// TS
// 操作符-keyof、typeof、in


// type Person = {
//     name: string;
//     age: number;
// }

// keyof可以获取一个类型所有键值，返回一个联合类型
// type PersonKey = keyof Person; //PersonKey 得到的类型为'name'  | 'age'
// type PersonKey = 'name' | 'age'; //PersonKey 得到的类型为'name'  | 'age
// const str: PersonKey = 'age';
// const str: 'name' | 'age' = 'name';

// keyof 的一个典型用途是限制访问对象的 key 合法化
// function getValue(p: Person, k: keyof Person) {
//     return p[k];
// }

// getValue({name:'tom', age: 10}, 'age');




// typeof 是获取一个对象/实例的类型

// const me: Person = {name: 'tom', age: 16}
// type P = typeof me; //{name: string, age: number}
// const you: P = {name: "jake", age: 20};












// 思考: 和js中的 typeof 有什么区别？




// const me = {name: "tom", age: 16};
// type PersonKey = keyof typeof me; // 'name' | 'age'
// let Data: PersonKey = 'name';



// type Person = {
//     name: string;
//     age: number;
// }

// type TypeToNumber<T> = {
//     [key in (keyof T)]: number;
// }
//     [key: string]: any, //索引签名

// [key in ("name" | "age")]: number;
// const obj: TypeToNumber<Person> = {name: 10, age:10}



// type roles = "tester" | "developer" | "manager";
// type Roles = {
//     tester: number,
//     developer: number,
//     manager: number,
// }
// const staffCount: { [k in roles]: number } = {
//   tester: 100,
//   developer: 200,
//   manager: 300,
// };

// 类型变量 k,以此绑定到对象的每一个属性
// 遍历三个字符串字面量组成的联合类型 roles
// number 为每个属性的值的类型


















