// 해당 파일은 문제를 잘못 이해하여 푼 것입니다.

// 인쇄 대기목록에서 최초 최대값을 찾고 오른쪽으로 순차적으로 인쇄하고,
// location에 따라서 출력순서값을 리턴

// 프로그래머스에서 테스트 케이스 통과 함.

//var priorities = [2,1,3,2];
var priorities = [1,1,9,1,1,1];
var location = 0;

var result = solution(priorities, location);
console.log(result);

function solution(priorities, location) {
    var answer = 0;
    var max = 0;        // 우선순위 최대값
    var position = 0;   // 찾은 최대값 인덱스

    for (var i=0;i<priorities.length;i++){     // 최대값구하기 막코딩
        if (priorities[i] < priorities[i+1]) {
            if (max < priorities[i+1]){
                max = priorities[i+1];
            }
        }
    }
    if (priorities[0] > max){
        max = priorities[0];
    }
    //max = Math.max.apply(null,priorities); // 함수이용 최대값 구하기

    for (var i = 0;i<priorities.length;i++){ // 최대값 위치 구하기
        if (priorities[i]===max){
            position = i;
            break;
        }
    }

    var data = [];      // 우선순위, 출력 순서, 인덱스를 담는 배열
    var seq = 0;        // 출력순서

    // 최대값부터 데이터 쌓기
    for (var i=position;i<priorities.length;i++){
        seq = seq +1;
        data.push(priorities[i]);       // 우선순위 push
        data.push(seq);                 // 출력순서 push
        data.push(i);                   // 우선순위 인덱스값 push
    }
    // 최대값 이전 데이터 쌓기
    for (var i=0;i<position;i++){
        seq = seq +1;
        data.push(priorities[i]);       // 우선순위 push
        data.push(seq);                 // 출력순서 push
        data.push(i);                   // 우선순위 인덱스값 push
    }

    // location에 따라 출력순서 검색
    for (var i = 2;i<data.length;i=i+3){
        if (data[i]===location){
            answer =  data[i-1];
        }
    }

    return answer;
}
