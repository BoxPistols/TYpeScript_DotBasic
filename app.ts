// function add({ a, b }: { a: number; b: number; }): number {     return a + b;
// }; console.log(add({ a: 1, b: 2 }));
{
  const boo: boolean = false;
  const count: number = 10;
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
    last: 'smith'
  },
  age: 20
  }
  // console.log(person.name.first)
  const firstName = person.name.first
  // let n:number = person.age
  document.write(`${firstName}<br>`);
}

{
  // const fruits: string[] = ["banana","apple","Grape"]
  const fruits = ["banana","apple","Grape", 2]
  fruits.push("Melon","Orage")
  fruits
  document.write(`${fruits}<br>`);
}

{
  const book: [string, number, boolean] = ['biz', 1500, false]

  function sortByAsc(numbers: number[]): number[] {
  return numbers.sort((a, b) => a > b ? -1 : 1)
  }
  const sorted = sortByAsc([9329, 87, 654, 321])
  console.log(sorted)

  function sortAsc(numbers: number[]){

  }
}