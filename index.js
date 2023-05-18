const express = require('express');
const app = express()
const PORT = 8080;

app.set("view engine", "ejs")
app.use(express.static(__dirname + "views"))

app.get('/', function(req,res){
  res.render('index')
})

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/getForm', function(req,res){
  res.render('result',{
    title : "GET 요청 폼 결과 확인하기",
    userInfo: req.query
  })
})

app.post("/postForm", function (req, res) {
  console.log(req.body);
  res.render("result.ejs", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.listen(PORT, function(){
  console.log(`${PORT}를 실행시켰다.`);
})