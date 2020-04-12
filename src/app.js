{
    var boo = false;
    var count = 10;
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
    var person = {
        name: {
            first: 'jack',
            last: 'smith'
        },
        age: 20
    };
    // console.log(person.name.first)
    var firstName = person.name.first;
    // let n:number = person.age
    // d(`${firstName}<br>`);
    console.log({ firstName: firstName });
}
{
    // const fruits: string[] = ["banana","apple","Grape"]
    var fruits = ['banana', 'apple', 'Grape', 2];
    fruits.push('Melon', 'Orage');
    fruits;
    // d(`${fruits}<br>`);
}
{
    var book = ['biz', 1500, false];
    function sortByAsc(numbers) {
        return numbers.sort(function (a, b) { return (a > b ? -1 : 1); });
    }
    var sorted = sortByAsc([9329, 87, 654, 321]);
    console.log(sorted);
    // d(`${sorted}<br>`);
}
{
    function greet(person) {
        return 'Hello' + person;
    }
    var user = 'Jane';
    // document.body.innerHTML = greet(user)
    console.log(greet(user));
}
{
    // オブジェクト型リテラル
    function getLabel(user) {
        return "name:" + user.name + " @" + user.id;
    }
    var user = { name: '奥野', id: 'amk986' };
    console.log(getLabel(user));
}
{
    var arr = [11, 22, 33];
    arr.forEach(function (value) {
        console.log(value);
    });
    arr.forEach(function (value, index, array) {
        /*
          value … 配列の要素
          index … インデックス
          array … 操作中の配列本体
        */
        console.log(index, ':', value, ' <- ', array[index], array);
    });
}
{
    // 直前の要素との差分
    var arr = [100, 110, 115, 103, 110, 90];
    for (var i = 1; i < arr.length; i++) {
        var item1 = arr[i - 1];
        var item2 = arr[i];
        var diff = item2 - item1;
        var sign = diff < 0 ? '' : '+';
        console.log(item1 + " -> " + item2 + " (" + sign + diff + ")");
    }
}
{
    var obj = {
        a: 11,
        b: 22,
        c: 33
    };
    Object.keys(obj).forEach(function (key) {
        console.log(key);
    });
    var map = new Map([
        ['foo', 11],
        ['bar', 22],
        ['boo', 33],
    ]);
    map.forEach(function (value, key) {
        console.log(key, value);
    });
    var set = new Set([11, 22, 33]);
    set.forEach(function (value, v2) {
        console.log(value, v2, value === v2); // 11, 11, true 等
    });
}
