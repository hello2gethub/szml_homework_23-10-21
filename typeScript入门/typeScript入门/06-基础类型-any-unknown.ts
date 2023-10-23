// TS基础类型
// any unknown

// any是顶级类型，表示任意类型，任何值都可以赋值给any，会忽略类型检查
// let notSure:any = 666;
// notSure = 'abc';
// notSure = false;
// notSure.a().b().c();

// // unknown 类型代表任何值，这与any类型类型，但更安全，因为对未知 unknown 值做任何事情都是不合法
// let value:unknown = 666;
// value = 'abc';
// value = false;
// value.a();



