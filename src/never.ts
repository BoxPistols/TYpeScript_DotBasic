export {}
/*
  never 戻ってこない 例外前提
*/
function error(message: string): never {
  throw new Error(message) // 必ずエラーが出る
}

try {
  let res = error('test')
  console.log({ res })
} catch (e) {
  error('エラーが出たよ!!')
}

let foo: void = undefined
// let bar: never = null
let bar: never = error('Nothing!')
