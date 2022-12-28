// 함수의 파라미터의 타입을 정의하는 방식
function sum_1(a: number, b: number) {
  return a + b;
}
sum_1(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  // 리턴값의 타입을 number라고 지정했기 때문에
  // 리턴값이 없게 되면 에러 발생
  return 10;
}

// 함수의 타입을 정의하는 방식
function sum_2(a: number, b: number): number {
  return a + b;
}

sum_2(10, 20);

// 함수의 옵셔널 파라미터
// 어떨 떄는 인자 하나를 넘기고 싶고...
function log(a: string, b?: string) {
  console.log(a, b);
}

log('hello'); // 물음표가 붙은 파라미터는 선택 가능
log('hello', 'world');
// log('hello', 123);
