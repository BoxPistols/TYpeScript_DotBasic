export {}

// 型エイリアス
type ObjectType = {
  name: string
  age: number
}

// let object: ObjectType = {
let object: ObjectInterface = {
  name: 'Mike',
  age: 33,
}

// typeと基本は同じ
interface ObjectInterface {
  name: string
  age: number
}
