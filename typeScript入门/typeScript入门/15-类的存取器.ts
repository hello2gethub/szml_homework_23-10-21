// TS  Getters/Setters
// 如果存在Get，但没有Set，则该属性是只读的
// 如果没有指定setter参数的类型。它将从getter的返回类型中推断出来,访问器和设置器必须有相同的成员可见性
// 

// class Person {
//     private name: string = '';
//     get fullName(): string {
//         return this.name;
//     }
//     set fullName(name) {
//         this.name = name;
//     }
// }

// const p1 = new Person();
// p1.fullName = 'tom'; //set的过程
// console.log(p1.fullName) //get的过程



// class Thing {
//     _size: number = 0;
//     get size(): number {
//         return this._size;
//     }
//     set size(value) {
//         this._size = value;
//     }
// }

// let A = new Thing();
// console.log(A.size);
// A.size = 'str';
// console.log(A.size);


// 思考：如何利用get，set实现readonly？











