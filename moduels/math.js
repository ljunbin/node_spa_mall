// 첫번째 방법
// function add(a, b){
//     return a + b;
// }
// module.exports = add;
// // 함수 add 는 a와b 라는 인자를 받으면 a+b 한 값으로 돌려준다
// // module 이라는건 함수와 변수들의 집합인데 js파일 단위로 분리된 코드다
// // exports는 module. 에 붙이면 외부 모듈에서 해당 변수나 함수에 접근할수 있게 해준다
// // 즉 함수 add를 외부 js파일에서 접근할수있게 해준다는 소리다

// 두번째 방법
// exports.add = function(a,b) {
//     return a + b;
// }
// // //exports.add 는 객체? 로 참조하게 만든다 add라는 함수 하나만

// // 세번째방법
// function add(a,b){
//     return a+b;
// }
// module.exports = {add : add};
// add 라는 키에 add라는 함수가 오게 만들었다
// 앞에있는 add라는 키를 가져가면 뒤에 있는 add라는 함수를 내주는것


// // 정리 add라는 함수가 있을때
// function add (a,b) {
//     return a+b;
// }

// // 모듈을 호출했을 때, add 키 값에는 (a,b)(return a+b;) 익명함수가 할당되는 방법이다
// // exports.add = function(a,b){
// //     return a+b;
// // }

// // 모듈을 호출했을 때, add 키 값에는 add 함수가 들어가는 방법이다
// // module.exports = { add : add} ;

// // 모듈 그 자체를 바로 add 함수를 할당한다
// // module.exports = add;

// // 모듈을 호출했을 때 add 키 값에는 변수 함수가 가지고 있는 값이 할당된다
// const add = (a,b) => {
//     return a+b;
// }

// exports.add = add;


// 이 방법들 중에 가장 편하고 알맞는 방법을 쓰면됨