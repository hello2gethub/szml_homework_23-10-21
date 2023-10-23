// TS
// interface和type的区别：
// type不会创建新的类型，它只是对已有类型的直接引用，而interface是定义了一个接口类型
// type能够表示非对象类型，而interface则只能表示对象类型
// interface通过extends继承其他接口，type通过&实现类型的扩展
// 重复声明interface会合并，重复声明type报错
// 参考: https://juejin.cn/post/7063521133340917773


// type T1 = string;

// type T2 = {
//     name: string,
//     age: number,
// };
// type T3 = T2;


// interface I {
//     name: string
// }

// type T4 = I ;


// interface Person { 
//     name: string,
// }
// interface Student extends Person { 
//     grade: number 
// }
// const person:Student = {
//     name: 'lin',
//     grade: 100
// }



// type Person = { 
//     name: string 
//  }
// //   type Person = { 
// //     age: number
// //   }
// type Student = Person & { grade: number  } 

// const person:Student = {
//     name: 'lin',
//     grade: 100
// }






