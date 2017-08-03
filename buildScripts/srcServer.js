import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users', function(req,res){
  //hard coded api return call
  res.json([
    {"id":1,"firstname":"Sourav","lastname":"Mandal","email":"sourav123@abc.kj"},
    {"id":2,"firstname":"Sam","lastname":"Son","email":"sam123@abc.kj"},
    {"id":3,"firstname":"Matheu","lastname":"lee","email":"matheu123@abc.kj"}
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:'+port);
  }
});
