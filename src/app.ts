{
  const boo: boolean = false
  const count: number = 10
  // count
  // boo
  /*
  const person: {
  name: string;
  age: number;
  } = {
  name: 'jack',
  age: 20
  }
*/
  const person = {
    name: {
      first: 'jack',
      last: 'smith',
    },
    age: 20,
  }
  // console.log(person.name.first)
  const firstName = person.name.first
  // let n:number = person.age
  // d(`${firstName}<br>`);
  console.log({ firstName })
}

{
  // const fruits: string[] = ["banana","apple","Grape"]
  const fruits = ['banana', 'apple', 'Grape', 2]
  fruits.push('Melon', 'Orage')
  fruits
  // d(`${fruits}<br>`);
}

{
  const book: [string, number, boolean] = ['biz', 1500, false]

  function sortByAsc(numbers: number[]): number[] {
    return numbers.sort((a, b) => (a > b ? -1 : 1))
  }
  const sorted = sortByAsc([9329, 87, 654, 321])
  console.log(sorted)
  // d(`${sorted}<br>`);
}
{
  function greet(person: string) {
    return 'Hello' + person
  }
  let user = 'Jane'
  // document.body.innerHTML = greet(user)
  console.log(greet(user))
}
{
  // オブジェクト型リテラル
  function getLabel(user: { name: string; id: string }): string {
    return `name:${user.name} @${user.id}`
  }
  const user = { name: '奥野', id: 'amk986' }
  console.log(getLabel(user))
}
{
  const arr = [11, 22, 33]

  arr.forEach(value => {
    console.log(value)
  })

  arr.forEach((value, index, array) => {
    /*
      value … 配列の要素
      index … インデックス
      array … 操作中の配列本体
    */
    console.log(index, ':', value, ' <- ', array[index], array)
  })
}
{
  // 直前の要素との差分
  const arr = [100, 110, 115, 103, 110, 90]
  for (let i = 1; i < arr.length; i++) {
    const item1 = arr[i - 1]
    const item2 = arr[i]
    const diff = item2 - item1
    const sign = diff < 0 ? '' : '+'
    console.log(`${item1} -> ${item2} (${sign}${diff})`)
  }
}
{
  const obj = {
    a: 11,
    b: 22,
    c: 33,
  }
  Object.keys(obj).forEach(key => {
    console.log(key)
  })

  const map = new Map([
    ['foo', 11],
    ['bar', 22],
    ['boo', 33],
  ])
  map.forEach((value, key) => {
    console.log(key, value)
  })

  const set = new Set([11, 22, 33])
  set.forEach((value, v2) => {
    console.log(value, v2, value === v2) // 11, 11, true 等
  })
}
