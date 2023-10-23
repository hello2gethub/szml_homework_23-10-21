// TS基础类型
// 枚举、void



// 枚举用来组织有关联的变量，能更加直观的表达数据
// 默认从 0 开始编码
// enum COLOR {
//     'Red',
//     'Green',
//     Blue
// }



// console.log(COLOR.Green);
// console.log(COLOR[2]);

// // 自定义枚举值
// enum CODES {
//     SUCCESS = 200,
//     ERROR = 404
// }

// const codeObject = {
//     SUCCESS: 200,
//     ERROR: 404,
//     200: 'SUCCESS',
//     404: 'ERROR',
// }

// console.log(CODES.SUCCESS);
// console.log(CODES.ERROR);



// 思考： 枚举和对象的区别是什么
// const obj = {
//     SUCCESS: 200,
//     ERROR: 404
// }

// obj.SUCCESS = 100; 

// console.log(obj.SUCCESS);
// console.log(obj.ERROR);

// CODES.SUCCESS = 100; 



// 区别: 枚举属性不可修改
// // void表示没有任何类型，一般用在函数中表示没有返回值
// function test1() {
//     console.log('test1');
// }

// const test2 = ():void => {
//     console.log('test2');
//     // return 1123;
// }

// test1();
// test2();
