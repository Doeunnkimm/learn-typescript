interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Typescript' };
}

var tony = introduce();
// console.log(tony.skill); // 유니온 타입을 사용하면 타입들의 교집합만 접근할 수가 있었음

// 타입 단언만 해서 사용하게 되면
// 이렇게 사용하면 반복되는 부분이 많아 가독성 저하
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  // 타입 가드를 사용했더니 True/False로 해당 블록으로 들어왔을 때 tony의 타입을 가드해줌
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
