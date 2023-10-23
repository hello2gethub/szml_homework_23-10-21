// TS基础类型
// 布尔值、数值、字符串、数组、元组/元祖

// // 布尔值
// let isBoolean = false;
// let isBoolean: boolean = 'str';

// // 数值
// let isNumber:number = 1;

// // 字符串
// let isString:string = 'str';


// let list = [1,2,3];
// // 数组
// Array<number>
// let list1: number[] = [1,2,3];
// let list2: Array<number> = [1,2,3, 'str'];
// let list3: (number | string | boolean)[] = [1,2,'str',3];
let list4: Array<number | string> = [1,2,'str',3];

// // 元组 表示数量和类型已知的数组
let x:[string, number] = ['str', 11, ];



// const bar = {
//     foo(){
//         console.log('foo');
//     }
// };
// bar.foo = 'foo';
// bar.foo();  
// console.log(bar); 


// ESLint
// coffeeScript
// flow  faceBook  
// {}