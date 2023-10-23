// 基本类型
// 布尔值、数值、字符串、数组、元组


// 1. 布尔值
let isBoolean = false;

// 2. 数值
let isNumber:number = 1;

// 3. string
let isString:string = '1';

// 4. Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: (number | string | boolean)[] = [1, '123', false];

// 5. 元组 表示类型和数量已知的数组
let list_yz: [string, number] = ['123', 123];

// 6. 枚举 用来组织有关联的变量
// 枚举属性不可修改，默认为只读
// 默认从0开始
enum COLOR {
  'red',
  'blue',
  'green'
}

console.log(COLOR.green);
console.log(COLOR[2]);

// 自定义枚举值
enum CODES {
  SUCCESS = 200,
  ERROR = 404
}

// 7. any 顶级类型，任何类型的值都可以用any，会忽略类型检查
let num2: any = 123;
num2 = '123';

// 8. unknown 不知道是什么类型
let someValue: unknown = '123';

// 9.声明类型 尖括号
// let strlen: number = <string>someValue.length;




