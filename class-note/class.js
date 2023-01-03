function Person(name, age) {
  this.name = name;
  this.age = age;
}
var doeunn = new Person('doeunn', 23);

// 위 코드아 아래 코드는 완전히 동일함
// ES6 이전에 제공하던 문법으로도
// 생성자 함수를 통해 구현할 수 있었음

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30); // 생성되었습니다.
console.log(seho);

var user = { name: 'doeunn', age: 23 };
var admin = { name: 'doeunn', age: 23, role: 'admin' };
// 위 코드를 봤을 때 user에서 사용했던 속성들이
// admin에서 중복되는 부분이 있음을 확인
// 이러한 부분들을 줄일 수 있는 방법이 필요
// 이것이 바로 자바스크립트에서 지향하는 프로토타입을 이용한 상속

// user에서 사용한 속성을 admin에서 재사용할 수 있도록
// admin의 프로토타입을 정의
// var user = { name: 'doeunn', age: 23 };
// var admin = {};

// admin.__proto__ = user; // 프로토타입의 상위에 user 객체를 주겠다.

// console.log(admin.name); // doeunn
// console.log(admin.age); // 23

// admin.role = 'admin';

var obj = { a: 10 };
console.log(Object.keys(obj)); // ['a']
console.log(obj.hasOwnProperty('a')); // true
// 크롬창에서 obj를 찍어보게 되면
// 상위 프로토타입(__proto__)가 Object이고
// 그 객체에 정의되어 있는 메서드나 속성을 쓸 수 있게 되는 것

var user = { name: 'doeunn', age: 23 };
var arr = [];
// 배열 같은 경우에도 상위 프로토타입이 Array이기 때문에
// Array에서 제공되고 있는 메서드들을 모두 사용가능했던 것!
arr.indexOf(1);

// 클래스 상속
class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
  meow() {
    return 'MEOWWW';
  }
}

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
  bark() {
    return 'WOOF';
  }
}

class Pet {
  constructor(name, age) {
    console.log('IN PET CONSTRUCTOR!');
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating!`);
  }
}

class Cat extends Pet {
  constructor(name, age, color = 'yellow') {
    console.log('IN CAT CONSTRUCTOR!');
    super(name, age);
    this.color = color;
  }
  meow() {
    return 'MEOWWW';
  }
}

class Dog extends Pet {
  bark() {
    return 'WOOF';
  }
}

var mondol = new Dog('mondol', 7);
mondol.eat(); // mondol is eating!

var bom = new Cat('bom', 5);
console.log(bom);
