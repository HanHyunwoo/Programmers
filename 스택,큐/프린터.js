//var priorities = [2,1,3,2];
var priorities = [1,1,9,1,1,1];
var location = 0;

var result = solution(priorities, location);
console.log(result);

function solution(priorities, location) {
    var answer = 0;

    // 우선순위, 인덱스 정보를 담는 배열
    var copy = [];

    // 출력순서
    var seq = 0;

    // 우선순위, 인덱스, 출력순서를 담는 배열
    var data = [];

    // copy에 우선순위, 인덱스 저장
    for (var i =0;i<priorities.length;i++){
        copy.push(priorities[i]);
        copy.push(-i);  //-를 한 이유는 우선순위가 높은 데이터를 검색할 때 방해 제거
    }

    // 처음 대기목록 순서에 따라 검색함으로 0번째부터 시작
    // 처음 문서를 계속 검색하는 알고리즘으로 copy데이터가 모두 삭제되면 -1 반환으로 반복문 종료
    for (var i=0; i<copy.length; i=i){

        // 우선순위가 가장 높은 것을 찾고, 있으면 우선순위,인덱스,출력순서를 data에 담고,
        // 찾은 데이터는 중복검사를 하지 않기 위해 삭제한다.
        if (copy[i] === max_function(copy)){  // Math.max.apply(null,copy) ,객체함수가 속도 훨씬 빠름
            seq = seq +1;
            data.push(copy[i]);        // data에 우선순위를 추가
            data.push(copy[i+1]);      // data에 우선순위의 인덱스값 추가
            data.push(-(seq));         // -를 한 이유는 우선순위가 높은 데이터를 검색할 때 방해 제거
            copy.shift();           // 찾은 우선순위 제거
            copy.shift();           // 찾은 우선순위의 인덱스값 제거

        // 우선순위가 가장 높은 값이 아니면, 가장 마지막으로 보낸다.
        }else{
            copy.push(copy[i]);    // copy배열의 마지막에 우선순위 추가
            copy.push(copy[i+1]);  // copy배열의 마지막에 우선순위의 인덱스값 추가
            copy.shift();          // 마지막으로 보냈으니, 첫번째 원소 우선순위 삭제
            copy.shift();          // 그 다음 첫번째 원소 인덱스값 삭제
        }

    }

    // location에 따라 출력순서 검색
    for (var i = 1;i<data.length;i=i+3){  // i=1 인덱스값 시작위치, 데이터가 3개씩이니 3칸씩 검색
        if (-(data[i])===location){         // data에서 입력된 location 검색
            answer =  -(data[i+1]);         // 인덱스값 다음으로 저장된 출력순서값을 리턴
        }
    }

    return answer;
}

function max_function(arr){   // 최대값 구하기 함수,
    var max = 0;
    for (var i=0;i<arr.length;i++){
        if (arr[i] < arr[i+1]) {
            if (max < arr[i+1]){
                max = arr[i+1];
            }
        }
    }
    if (arr[0] > max){
        max = arr[0];
    }
    return max;
}
