// TS
// 交叉类型

// 交叉类型是将多个类型合并为一个类型，包含了所有类型的特性


type PointX = {x: number};
type PointY = {y: number};
type Point = PointX & PointY
let point:Point = {
    x: 1,
    y: 1
}









