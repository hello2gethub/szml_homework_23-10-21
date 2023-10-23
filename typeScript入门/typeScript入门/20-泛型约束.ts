// TS
// 泛型约束

// interface Lengthwise {
//     length: number;
// }

// // 限定传入的参数类型必须实现Lengthwise接口
// function test<T extends Lengthwise>(args: T): T{
//     console.log(args.length)
//     return args;
// }

// // test({length: 1})
// test('str')
// test(1)




// 课堂练习
// 通过补充代码，让makeCustomer方法不报错
// type User = {
//     id: number;
//     kind: string;
// }

// function makeCustomer<T extends User>(u: T): T{
//     return {
//         id: u.id,
//         kind: 'customr',
//     } as T 
// };

// makeCustomer({
//     id: 1,
//     kind: 'admin',
//     name: 'jack',
// });











