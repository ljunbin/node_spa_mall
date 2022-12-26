// 첫번째 방법
// const add = require("./math.js");
// //console.log(add(10,30));
// // math.js 에 require 요구한다 > 무엇을? > add 함수를
// // math.js 함수 add는 인자인 a랑 b를 더하는 함수다 그래서 10+30 해서 40을 콘솔로그에 찍어준다

// 두번재 방법
// const {add} = require("./math.js");
// console.log(add(10,30))
// 그래서 run.js에서 const add 를 const {add} 로 만들어줘서 객체를 참조할수 있도록 바꿔준다 
// (add라는 함수하나만 가져온다는 소리)

// // 세번째 방법
// const {add} = require("./math.js");
// console.log(add(10,30))
// // const add 라는 키를 가져오면 math.js에 요구를 한다 > add라는 함수를

