/* eslint-disable prettier/prettier */
// function fetchItems() {
//   let items = ['a', 'b', 'c'];
//   return items;
// }
// // 동기적인 함수들은 리턴하는 items string[]으로 추론할 수가 있음
// let result = fetchItems();
// console.log(result);

function fetchItems() {
  // Promise<unknown> : 프로미스가 오긴 오는데
  // 그 안의 타입은 뭔지 모르겠음
  // -> fetchItems 함수가 실행되는 시점의
  // 타입스크립트는 Promise 안에 들어오는 비동기 코드들에 대해
  // 알 수 없다는 것..

  // 프로미스가 기본적으로 제네릭으로 정의되고 있음
  // 타입을 집어넣고 그걸 돌려받아야 한다는 것
  let items = ['a', 'b', 'c'];
  return new Promise((resolve) => {
    resolve(items);
  });
}

function fetchItems2(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise((resolve) => {
    resolve(items);
  });
}
fetchItems2();

// 프로미스 안에서 resolve된 값과 반환값의 타입이 같아야 하는데
// 지금 반환 받는 값의 타입을 number[]로 정의했는데
// 실제로 resolve(리턴받는 값)은 string[/]이어서 에러 발생
function fetchItems3(): Promise<number[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise((resolve) => {
    // resolve(items); // Error
  });
}
fetchItems3();
