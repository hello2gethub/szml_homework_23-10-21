// TS函数

// function sum(a, b, c) {
//     return a+b+c;
// }


function sum(a: number, b: number = 1,c?: number): number {
    // return a+b+c;
    // if (c) {    
    //     return a+b+c;
    // }
    // return a+b;
    return  c ? a+b+c : a+b;

}
sum(1,2);
sum(1,2,3);




