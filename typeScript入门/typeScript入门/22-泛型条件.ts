// TS
// 泛型条件

interface Father {
    blood: '0',
}

interface Mather {
    blood: 'X',
}

type Son<T> = T extends Father ? Father : Mather;

type boy = Son<{}>; // Mather

type girl = Son<{blood: '0', name: "zhangsan"}>; // Father






// // infer 推断，就是不用预先制定类型，在运行时会自动判断
// infer Test 相当于声明一个类型变量，这个变量的类型取决于传入的泛型 T，在之前的时候 extends 右边的类型是写死的
// 但是在这里通过 infer Test 来代替写死的类型，并且具体的类型取决于传入的泛型。
// 不过需要注意，Test 变量只能在 true 的分支可以使用，也就是只能在 ? 的第一个分支中使用。


type Foo<T> = T extends {t: infer Test} ? Test : string;

type One = Foo<number>; // string
type Two = Foo<{t: boolean}> // boolean
type Three = Foo<{a: number, t: () => void}> // () => void




















