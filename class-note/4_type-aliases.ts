// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

var seho: Person = {
  name: '세호',
  age: 30,
};

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

// string 타입을 사용할 때
var thisName: string = 'doeunn';

// 타입별칭을 사용할 때
type MyName = string;
var thisName: MyName = 'doeunn';

type Developer = {
  name: string;
  skill: string;
};

var dep1: Developer = {
  name: 'doeunn',
  skill: 'typescript',
};
