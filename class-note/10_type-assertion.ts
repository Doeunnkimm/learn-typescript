// 타입 단언(type assertion)
var a;
a = 20;
a = 'a';
// var b = a; // 맨 처음에 선언된 any로 계속 추론
var b = a as string;
/*
    타입 단언은 타입스크립트 보다 개발자가 더 알고 있다
    하니까 내가 정의한 타입으로 간주해라 하는 것
*/

// 타입단언은 DOM API 조작할 때 가장 많이 사용
// <div id="app">hi</div>
var div = document.querySelector('div');
div?.innerText;
