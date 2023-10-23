// TS
// protected 可以在当前类或者派生类中使用

// class Animal {
//     protected name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     getName() {
//         return this.name;
//     }
// }

// class Cat extends Animal {
//     public age: number;
//     constructor(name: string, age: number) {
//         super(name);
//         this.age = age;
//         console.log(this.name)
//     }
//     public move(distance: number) {
//         console.log(`${this.name} moved ${distance}m`);

//     }
// }

// let cat = new Cat('cat', 3);
// const dog = new Animal('dogs');
// cat.move(10);
// console.log(cat.age);
// console.log(cat.name); //报错，守保护的属性无法访问
// console.log(dog.kind)










