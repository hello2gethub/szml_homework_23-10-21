// TS
// 泛型工具Partial<T>、Required<T>、Record<K,T>、Pick<T,K>、Omit<T,K>、ReturnType<T>


// Partial<T>

// type Animal = {
//     name: string;
//     age: number;
//     eat: () => number;
// }

// // 把对象类型的全部属性变成可选
// type PartialAnimal = Partial<Animal>;


// // 实现Partial
// type MyPartial<T> = {
//     [P in keyof T]?】?: T[P]
// }



// Required<T>

// type Animal = {
//     name?: string;
//     age: number;
//     eat?: () => number;
// }

// 把对象的全部属性变成必选
// type RequiredAnimal = Required<Animal>;



// Record<K,T>

// 声明一个对象的key和value类型
// const obj: Record<string, string> = {name: 'zhangsan', tag: '打工人', data: 'str', ages: 18,};

// // 将一个联合类型的值映射到另一个类型上
// type Animal = 'dog' | 'cat' | 'fish';

// type AnimalInfo = Record<Animal, { name: string; age: number }>;

// const animals: AnimalInfo = {
//   dog: { name: 'dogName', age: 2 },
//   cat: { name: 'catName', age: 3 },
//   fish: { name: 'fishName', age: 5 },
// };

// 实现Record
// type MyRecord<K extends keyof any, T> = {
//     [key in K]: T;
// }



// Pick<T,K>  从类型对象中 取出指定的属性类型

// type Animal = {
//     name: string;
//     age: number;
//     eat: () => number;
// }
// // 将对象类型中对应键的类型提取出来
const bird: Pick<Animal, "name" | "age"> = {name: 'bird', age: 1};

type Bird = {
    name: string;
    age: number;
}

// 测试信息类型
// interface User {
//     account: string
//     avatar: string
//     id: string
//     mobile: string
//     token: string
//   }
   
// 使用Pick泛型工具： 抽取 id 和 token
// type PickUserTest = Pick<User, 'id' | 'token' | 'account'>



// // 实现Pick
// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }



// Omit<T,K> 从类型对象中排出 指定的属性类型，得到剩余的属性类型

type Animal = {
    name: string;
    age: number;
    eat: () => void;
}

// // 去除对象类型T中包含K 的键值对
const OmitAnimal: Omit<Animal, 'name' | 'age'> = {eat: ()=>{console.log('eat')}};

interface User {
    account: string
    avatar: string
    id: string
    mobile: string
    token: string
  }
  
type OmitUserTest = Omit<User, 'token' | 'mobile'>

// ReturnType<T>  返回值类型
function foo(x: string | number) {
    return x;
}

// // 获取函数返回的类型
type FooType = ReturnType<typeof foo>; // string | number

// // 实现ReturnType
// type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
























