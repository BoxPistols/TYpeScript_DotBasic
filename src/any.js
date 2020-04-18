"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://udemy-utils.herokuapp.com/api/v1/articles/?token=token123';
axios_1["default"]
    .get(url)
    .then(function (res) {
    var data;
    data = res.data;
    data = [
        {
            id: 1,
            title: 'title',
            description: 'moge'
        },
    ];
    console.log(data);
})["catch"](function (err) {
    console.error(err);
});
