"use strict";
{
    const boo = false;
    const count = 10;
    const person = {
        name: {
            first: 'jack',
            last: 'smith',
        },
        age: 20,
    };
    const firstName = person.name.first;
    console.log({ firstName });
}
{
    const fruits = ['banana', 'apple', 'Grape', 2];
    fruits.push('Melon', 'Orage');
    fruits;
}
{
    const book = ['biz', 1500, false];
    function sortByAsc(numbers) {
        return numbers.sort((a, b) => (a > b ? -1 : 1));
    }
    const sorted = sortByAsc([9329, 87, 654, 321]);
    console.log(sorted);
}
{
    function greet(person) {
        return 'Hello' + person;
    }
    let user = 'Jane';
    console.log(greet(user));
}
{
    function getLabel(user) {
        return `name:${user.name} @${user.id}`;
    }
    const user = { name: '奥野', id: 'amk986' };
    console.log(getLabel(user));
}
{
    const arr = [11, 22, 33];
    arr.forEach(value => {
        console.log(value);
    });
    arr.forEach((value, index, array) => {
        console.log(index, ':', value, ' <- ', array[index], array);
    });
}
{
    const arr = [100, 110, 115, 103, 110, 90];
    for (let i = 1; i < arr.length; i++) {
        const item1 = arr[i - 1];
        const item2 = arr[i];
        const diff = item2 - item1;
        const sign = diff < 0 ? '' : '+';
        console.log(`${item1} -> ${item2} (${sign}${diff})`);
    }
}
{
    const obj = {
        a: 11,
        b: 22,
        c: 33,
    };
    Object.keys(obj).forEach(key => {
        console.log(key);
    });
    const map = new Map([
        ['foo', 11],
        ['bar', 22],
        ['boo', 33],
    ]);
    map.forEach((value, key) => {
        console.log(key, value);
    });
    const set = new Set([11, 22, 33]);
    set.forEach((value, v2) => {
        console.log(value, v2, value === v2);
    });
}
