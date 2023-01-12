// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText('안녕하세요'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText('안녕하세요');
// logText<string>('타입스크립트');
// 문자열을 집어 넣었기 때문에 파라미터의 타입은 문자열이 됨
// 반환하는 거 까지도 문자열이 된다고 지정할 수 있는 것
// 문자열이 됐건 숫자가 됐건 타입을 넘겨준 타입에 따라
// 동시에 지정해줄 수 있음.

// function logText(text: string) {
//   console.log(text);
//   //   text.split('').reverse().join('');
//   return text;
// }

// 로직은 같게 함수를 하나더 정의
// 하지만 유지보수면에서는 좋지 않은 방법
// 타입 때문에 중복된 함수를 다시 정의하기 때문에
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// 유니온 타입으로 여러 개의 타입을 받을 수가 있음
// function logText(text: string | number) {
//   console.log(text);
//   text.
//   // string타입과 number타입의 교집합이 되는
//   // 메서드들만 제공을 해주게됨
//   return text;
// }

// // 함수에서 text의 타입을 정의하지 않았기 떄문에
// // text: any로 되어 있음
// const a = logText('a'); // 여기서도 a를 string | number로 표시함
// // a.split(''); // a를 문자열로 받았음에도 문자열에 적용되는 메서드들이 적용X
// // -> 즉, input에 대해서는 해결을 했지만
// // output에 대해 해결하지는 못했음
// logText(100);

// 제네릭으로 문제 해결해 보기
// <T> <- 나 제네릭 쓸거야
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// // string이라는 타입을 받아서 쓰겠다고
// // 호출할 때 정의하는 것
// // logText의 타입을 string으로 쓰겠다고 하면
// // logText의 input과 output 즉, 인자와 반환값이
// // 모두 string이 되는 것을 타입스크립트가 알게 됨
// const str = logText<string>('abc');
// str.split(''); // 제제릭으로 타입을 알려준 덕분에
// // 문자열에 관련된 메서드를 사용할 수 있게 된 것
// const login = logText<boolean>(true);

// function logText<T>(text: T[]): T[] {
//   console.log(text.length);
//   return text;
// }

// 제네릭 인터페이스
// function logText<T>(text: T): T {
//   return text;
// }
// #1
// var str: <T>(text: T) => T = logText;
// // #2
// var str: { <T>(text: T): T } = logText;

// interface GenericLogTextFn<T> {
//   (text: T): T;
// }
// function logText<T>(text: T): T {
//   return text;
// }
// let myString: GenericLogTextFn<string> = logText; // Okay

//제네릭 클래스
class GenericMath<T> {
  pi: T;
  sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();

// length 속성 정도는 허용하려면..?
interface LengthWise {
  length: number;
}

function logText<T extends LengthWise>(text: T): T {
  console.log(text.length);
  return text;
}

// logText(10); // Error, 숫자 타입에는 length가 존재하지 않으므로 오류 발생
logText({ length: 0, value: 'hi' }); // 'text.length' 코드는 객체의 속성 접근과 같이 동작하므로 오류 없음

// 객체의 속성을 제약하는 방법
function getProperty<T, o extends keyof T>(obj: T, key: o) {
  return obj[key];
}
let obj = { a: 1, b: 2, c: 3 };

getProperty(obj, 'a'); // okay
// getProperty(obj: "z"); // error: "z"는 "a", "b", "c" 속성에 해당하지 않습니다.

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj2: Dropdown = { value: 'abc', selected: false };

// 위 Dropdown 인터페이스에서 value의 타입이 언제든지
// 바뀔 수 있다고 한다면

// 인터페이스를 사용할 떄 타입을 넘겨줄 수 있도록
interface Dropdown2<T> {
  value: T;
  selected: boolean;
}

// 넘겨주는 타입에 따라 value의 타입이 변하고 있음
const obj3: Dropdown2<number> = { value: 10, selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  // length를 쓰기 위해 배열 타입 사용..?
  console.log(text.length);
  return text;
}
logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LenghtType {
  length: number;
}
// 제네릭으로 받은 타입에는 length가 있을 것이라는 것을
// extends를 통해 알려주자
function logTextLength2<T extends LenghtType>(text: T): T {
  console.log(text.length);
  // return text;
}

logTextLength2('hi');
logTextLength2({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem 인터페이스에 있는 키값들만
// 함수의 인자로 들어갈 수 있음
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10); // Error
getShoppingItemOption('stock');
