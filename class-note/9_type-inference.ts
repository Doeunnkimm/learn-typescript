// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello',
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<number> = {
  title: 'abc',
  description: 'ab',
  value: 123,
  tag: 333,
};

// Best Common Type
var arr1 = [1, 2, 3]; // number[]으로 타입 추론
var arr2 = [1, 2, true]; // (number | boolean)[]으로 타입 추론
