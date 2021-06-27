var express = require('express')
var http = require('http');
var fs = require('fs');
var url = require('url');
var app = express()

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
        <canvas id="screen" width="680" height="420"></canvas>
    </body>
    </html>
    `;
    response.end(template);
 
});
app.listen(8080, function() {
    console.log("[GSS CERT] Server ON")
});
