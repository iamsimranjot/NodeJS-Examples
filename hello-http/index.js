const fs = require('fs')
const http = require('http');
const path = require('path')


const hostName = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

  console.log('Request for ' + req.url + ' by method ' + req.method);

  if (req.method == 'GET') {
    var fileURL = (req.url == '/') ? '/index.html' : req.url;

    var filePath = path.resolve('./public' + fileURL);
    const fileExt = path.extname(filePath)

    if (fileExt == '.html') {

      fs.exists(filePath, (exists) => {

        if (!exists) {

          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html')
          res.end('<html><body><h1>Error 404: ' + fileURL + ' not found</h1></body></html>')

          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res)
      });
    } else {

      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<html><body><h1>Error 404: ' + fileURL +
        ' not a HTML file</h1></body></html>');
    }
  } else {

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Error 404: ' + req.method +
      ' not supported</h1></body></html>');
  }
})

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`)
})
