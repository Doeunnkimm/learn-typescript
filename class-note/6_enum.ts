// 숫자형 이넘
enum Shoes {
  // 별도의 값을 지정하지 않으면 전부다 숫자형 타입을 취급
  Nike, // 0
  Adidas, // 1
  NewBalance, // 2
  Puma = 10,
  fila, // 11
}

// enum Shoes {
//   // 별도의 값을 지정하지 않으면 전부다 숫자형 타입을 취급
//   Nike, // 0
//   Adidas, // 1
// }

// Shoes에 제공되는 값은 위에서 enum 안에 있는 것들만
var myShose = Shoes.Nike;
console.log(myShose); // 0

// 문자형 이넘
// enum Shoes {
//   Nike = '나이키',
//   Adidas = '아이다스',
// }

// var myShose = Shoes.Nike;
// console.log(myShose); // '나이키'

// 숫자형 이넘 사용하기
enum ThisResponse {
  No = 0,
  Yes = 1,
}

function response(recipient: string, message: ThisResponse): void {
  // ...
}

response('Doeunn Blog', ThisResponse.Yes);
// response('Doeunn Blog', 'Yes'); // Error

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

// function askQuestion(answer: string) {
//   if (answer === 'yes') {
//     console.log('정답입니다.');
//   }
//   if (answer === 'no') {
//     console.log('오답입니다.');
//   }
// }

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    // 들어온 파라미터의 값이 단순한 문자열 비교가 아닌
    // 우리가 가지고 있는 데이터 타입 중 하나인지를 비교하게 됨
    console.log('정답입니다.');
  }
  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}

askQuestion(Answer.Yes); // 이넘에서 제공하는 데이터만 집어넣을 수 있음
// askQuestion('Yes'); // Error

// yes를 의미하는 다양한 값들을 인자로 넘겨줄 수도 있는데
// 이러한 값들을 관리하는 것을 enum을 통해서!
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
