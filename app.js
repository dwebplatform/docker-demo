var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users',(req,res)=>{
  return res.json({
    status:'ok',
    users:[{
      id:1, name:'John Smith'
    },{
      id: 2,
      name:'Karl Smith'
    }],
  });
});


app.listen(8080,()=>{
  console.log('Listening on port 8080');
});