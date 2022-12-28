// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedf {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

// 반환된 결과들을 보고 싶다면
/**
 * @returns {Promise<User>}
 */
// <User>라는 것은 fetchUser라는 것을 호출하고 나면
// Promise에 <User>라는 것이 담겨있을 것

function fetchUser() {
  return axios.get(url);
}

// 그냥 호출하면 반환 결과를 코드 상에서는 알 수 없음.
// fetchUser();
// 알고싶다면
// console.log(fetchUser());

fetchUser().then(function (response) {
  response.address.city;
});

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
