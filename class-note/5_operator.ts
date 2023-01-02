// function logMessage(value: any) {
//   console.log(value);
//   value.thisisError;
// }
// logMessage('hello');
// logMessage(100); // 문제를 해결하기 위해 value: string -> any
// 그러면 사실상 type의 장점이 사라지는 것...

// 타입의 장점을 살리면서 문제를 해결하는 방법
// | : 유니온 타입(Union Tpye)
// 하나 이상의 타입을 쓸 수 있게 해줌
// var seho: string | number | boolean;

function logMessage1(value: string | number) {
  console.log(value);
  // value.thisisError;
}
logMessage1('hello');
logMessage1(100);

// 유니온 타입의 장점
function logMessage2(value: string | number) {
  // 타입 가드(특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정)
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must bo string or number');
}

// 유니온 타입의 특징
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

type Dev = Person & Developer;

// 타입스크립트 입장에서는 Developer도 되어야 하고
// Person도 되어야 하기 때문에
// 구조체를 유니옵 타입으로 적용할 경우에는
// 공통된 속성만 사용이 가능
// function askSomeone(someone: Developer | Person) {
//   // someone.name; // 공통 속성만 사용 가능
//   // someone.skill;
//   // someone.age;
// }
// askSomeone({ name: 'doeunn', skill: 'typescript' }); // Developer의 규격에 맞게
// askSomeone({ name: 'ldojj', age: 26 }); // Person의 규격에 맞게

function askSomeone(someone: Developer & Person) {
  // someone은 Developer와 Person이 포함하는 속성을
  // 모두 만족하는 속성이라고 정의했기 때문
  // someone.name;
  // someone.skill;
  // someone.age;
}
// askSomeone({ name: 'doeunn', skill: 'typescript', age: 23 });
// askSomeone({ name: 'ldojj', age: 26 });

// 인터섹션 타입 - &
var seho: string | number | boolean;
var sara: string & number & boolean; // 절대 불가능한 타입
// string & number & boolean 모두 만족하는 절대 불가능한 타입
