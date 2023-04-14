// 인터페이스 간의 타입 호환
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

// class Person {
//   name: string;
// }

var developer: Developer;
var person: Person;

// developer = person; // 왼쪽 변수가 구조적으로 더 큰 관계를 가지고 있기 때문에 타입 호환 X

/*
    타입호환이라고 하는 것은
    오른 쪽의 타입이 더 많은 타입을 가지고 있거나
    구조적으로 더 큰 관계를 가지고 있을 때 가능
*/

// 함수
var add = function (a: number) {
  // ...
};

var sum = function (a: number, b: number) {
  // ...
};

// add = sum; // add는 1개 인자만 받을 수 있기 때문에 불가능
sum = add; // 호환 가능

// 제네릭
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;

interface NotEmpty<T> {
  data: T;
}
// 내부적으로 둘은 타입이 다르기 때문에
// 타입 호환 X
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
