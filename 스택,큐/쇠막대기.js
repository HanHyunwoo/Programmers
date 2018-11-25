var arrangement= "()(((()())(())()))(())";
var result = solution(arrangement);
console.log(result);

function solution(arrangement) {
    var result = 0;
    var data = [];
    console.log(arrangement);
    console.log(arrangement[0]);

    for (var i=0; i < arrangement.length; i++) {
        if (arrangement[i] === '('){
            data.push(arrangement[i]);

        } else {
            data.pop();
            if (arrangement[i-1] === '(') {
                result += data.length;
            } else result +=1;
        }
    }
    return result ;
}

