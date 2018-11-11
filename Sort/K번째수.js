var array= [1,5,2,6,3,7,4];
var commands = [[2,5,3], [4,4,1], [1,7,3]];
var result = [solution(array,commands)];
console.log(result);

function solution(array, commands) {
    var answer = new Array(commands.length);
    let end;
    let start;
    let select;
    let ex;
    for(let i=0; i<answer.length; i++) {
        end = (commands[i][1]);
        start = (commands[i][0])-1;
        select = (commands[i][2])-1;
        ex = new Array(end-start);
        for(var j=0; j<ex.length; j++) {
            ex[j]=array[j+start];
        }
        ex.sort();
        answer[i]=ex[select];
    }
    return answer;
}