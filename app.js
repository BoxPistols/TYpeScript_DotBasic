"use strict";

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
  // d(`${firstName}<br>`);

  console.log({
    firstName: firstName
  });
}
{
  // const fruits: string[] = ["banana","apple","Grape"]
  var fruits = ["banana", "apple", "Grape", 2];
  fruits.push("Melon", "Orage");
  fruits; // d(`${fruits}<br>`);
}
{
  var book = ['biz', 1500, false];

  function sortByAsc(numbers) {
    return numbers.sort(function (a, b) {
      return a > b ? -1 : 1;
    });
  }

  var sorted = sortByAsc([9329, 87, 654, 321]);
  console.log(sorted); // d(`${sorted}<br>`);
}