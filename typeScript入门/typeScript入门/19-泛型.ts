// // TS
// // 泛型 在定义函数、接口或类的时，不指定类型，在使用时指定类型（runtime）

// function print(arg: string): string {
//     return arg
// };

// function print1 (arg: string | number): string | number {
//     return arg
// };

// function print2<T>(arg: T): T{
//     return arg;
// }

// print2<string>('2');
// print2<number>(1);


// // // 泛型 case
// // // 泛型约束函数参数和返回值
// function showValue <T>(arg: T): T {
//     return arg;
// }
// // showValue<number>(1);
// // showValue<string>('foo');

// // 泛型约束函数
// // let value1: <T>(arg: T) => T = showValue;

// // 泛型接口定义
// interface IValue {
//     <T>(arg: T): T;
// }
// let value2: IValue = showValue;
// // value2<number>(1);

// // 通过泛型接口限定类型
// interface IValue2<T> {
//     (arg: T): T;
// }

// let value3: IValue2<string> = showValue;
// // value3('foo');
// // value3(1);













