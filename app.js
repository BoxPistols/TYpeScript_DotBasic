"use strict";

// function add({ a, b }: { a: number; b: number; }): number {     return a + b;
// }; console.log(add({ a: 1, b: 2 }));
{
  var boo = false;
  var count = 10; // count
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

  var person = {
    name: {
      first: 'jack',
      last: 'smith'
    },
    age: 20
  }; // console.log(person.name.first)

  var firstName = person.name.first; // let n:number = person.age

  document.write(firstName + "<br>");
}
{
  // const fruits: string[] = ["banana","apple","Grape"]
  var fruits = ["banana", "apple", "Grape", 2];
  fruits.push("Melon", "Orage");
  fruits;
  document.write(fruits + "<br>");
}
{
  var book = ['biz', 1500, false];

  function sortByAsc(numbers) {
    return numbers.sort(function (a, b) {
      return a > b ? -1 : 1;
    });
  }

  var sorted = sortByAsc([9329, 87, 654, 321]);
  console.log(sorted);

  function sortAsc(numbers) {}
}