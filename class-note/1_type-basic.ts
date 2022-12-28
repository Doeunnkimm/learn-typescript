// JS 문자열 선언
var str = 'hello';

// TS 문자열 선언
var str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let alphabet: Array<string> = ['A', 'B', 'C'];
let items: number[] = [1, 2, 3];

// TS 튜플
// 배열의 특정 인덱스까지 타입을 지정하는 것을 의미
let address: [string, number] = ['강남', 100];

// TS 객체
let obj: object = {};
let person_1: object = {
  // 객체 안 속성 타입까지는 신경X
  name: 'doeunn',
  age: 22,
};
let person_2: { name: string; age: number } = {
  // 객체 안 속성v 타입까지 지정해 줄 수도 있음
  name: 'doeunn',
  age: 22,
};

// TS 진위값
let show: boolean = true;
