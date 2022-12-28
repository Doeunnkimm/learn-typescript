interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호',
};

// 옵션 속성
interface Info {
  name: string;
  phone?: string;
}

var user1 = {
  name: '도은',
};
function logInfo(user: Info) {
  console.log(user.name);
}
logInfo(user1);

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const doeun = {
  name: '도은',
  age: 22,
};
getUser(doeun);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'
// arr[0] = 10; // 배열안에 들어가는 모든 타입이 string이라고 정의했기 때문에 에러

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
var obj: StringRegexDictionary = {
  sth: /abc/, // 정규식 -> obj.sth으로 바로 접근 가능하게 해줌
  cssFile: /\.css$/, // css 확장자를 가진 모든 파일을 가져오는 정규식
  jsFile: /\.js$/,
};

// 딕서너리 패턴을 주면 좋은점
Object.keys(obj).forEach((value) => {
  // 들어오는 인자 value가 바로 string인지를 알 수가 있음
});

// 읽기 전용 속성
interface CreateUser {
  readonly name: string;
}
let myUser: CreateUser = {
  name: '도은',
};

// 읽기 전용 배열
let ar: ReadonlyArray<number> = [1, 2, 3];
// arr.splice(0,1);
// arr.push(4);
// arr[0] = 100;

// 객체 선언과 관련된 타입 체킹
interface CreateBook {
  name?: string;
  [propName: string]: any; // 맘대로 속성을 추가하여 사용하고 싶을 때
}

function makeBook(book: CreateBook) {
  // ..
}
// makeBook({ namee: 'hello' });
// 만약 이러한 타입 추론을 무시하고 싶다면
let myBook = { namee: 'hello' };
makeBook(myBook as CreateBook);

// myUser.name = '호민';

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

// 다른 인터페이스의 내용과 중복되는 부분이 있다면
// 그 부분을 상속을 받아서 확장이 가능
interface Developer extends Person {
  language: string;
}

var doeunn: Developer = {
  name: '도은',
  age: 22,
  language: 'typescript',
};
