'use strict';

function thousands_separators(num) {
    var arry_str = num.toString();
    var arry_que = arry_str.split('.');
    var str = arry_que[0].split('');

    for(var i=str.length-3; i>0;i -= 3){
        str[i] = "," + str[i];
    }
    var result = str.join('');

    if (arry_que.length == 2){

        result += '.'+arry_que[1];
    }

    return result;
}

module.exports = thousands_separators;
