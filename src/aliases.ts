export {}

type Moji = string

const foo: Moji = 'hello'

// 型の基準にも出来る
const example = {
  name: 'Ham',
  age: 33,
  id: 2,
}

// 型用の関数えお作る事が出来る
type Profile = {
  name: string
  age: number
}

const example2: Profile = {
  name: 'Ham',
  age: 33,
}
// 型のinclude
type Profile2 = typeof example
