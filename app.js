const express = require('express');
const app = express();
const port = 3001;
const goodsrouter = require('./routes/goods.js')
const cartsRouter = require("./routes/carts.js");
const connect = require("./schemas");
connect();


// app.use = 전 영역에 미들웨어를 적용하겠다 express.json = body-parser middleware를 쓰기위한 문법
// 모든 코드에 body-parser를 등록해서 우리는 request안에 있는 body 데이터를 쓰겠다
app.use(express.json())

// localhost:3001/api -> goodsrouter
app.use("/api", [goodsrouter, cartsRouter]);
// 다른 라우터를 app.use 미들웨어를 통과 시키고 싶을때 같은걸 여러개로 붙이는게 아니라
// [] 배열을 만들어주고 계속 이어 붙여주면 된다
// app.use("/api", [goodsrouter, usersRouter, aboutrouter]); << 이런식으로

app.get("/", (req,res) => {
  res.send('정상적으로 반환되었습니다.');
})

app.post("/", (req,res) => {
  console.log(req.body);

  res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
})

app.get("/", (req,res) => {
  console.log(req.query);

  const obj = {
    "keykey" : "value입니다",
    "이름입니다" : "이름일까요?",
  }

  res.json(obj);
  // res.status(400).json({}); 이렇게 날리면 400번 포트로 날리게됨 기본 디폴트가 200이라서 400으로 날리면 오류남

  // obj 객체를 바로 res.json() 에 넣어도 똑같음 요렇게
  // res.json({
  //   "keykey" : "value입니다",
  //   "이름입니다" : "이름일까요?"
  // });

  
});



app.get("/:id", (req,res) => {
  console.log(req.params);
  
  res.send(":id URI에 정상적으로 반환되었습니다.");
})

// app.get('/', (req, res) => {
//   res.send('hello world');
// });





app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});