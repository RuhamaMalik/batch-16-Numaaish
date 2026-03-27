// const fs = require('fs');

// fs.writeFile('text.txt', 'Jumma Mubarak',(err,data)=>{});

// fs.appendFile('text.txt', '\nEid Mubarak',()=>{});
// fs.appendFileSync('text.txt', '\nShadi Mubarak');

////////////////////// 

// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'files');

// fs.writeFile(`${dirPath}/test.txt`, 'Nikah Mubarak', ()=>{});

// for (let i = 1; i <= 5; i++) {
//   fs.writeFile(
//     `${dirPath}/test${i}.txt`,
//     `${i} ------ File Created`,
//     () => {});
// }

// fs.readdir(dirPath, (err, data) => {
//   // console.log(data[3]);
//   fs.readFile(`${dirPath}/${data[3]}`, 'utf-8', (err) => {
//     if(err){
//       console.log(err);
//     }
//      })
// })


////////////////////// 

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    const log = ` ${req.url} --- Time: ${Date.now()} --- apna page\n`;
   const parsedUrl =  url.parse(req.url,true);
   console.log(parsedUrl);
   
    fs.appendFile('log.txt', log, () => {
      switch (req.url) {
        case '/':
          res.end("Home");
          break;
        case '/products':
          res.end("Products");
          break;
        case '/orders':
          res.end("Orders");
          break;
        case '/about':
          res.end("About");
          break;
        case '/services':
          res.end("Services");
          break;
        default: res.end("404 Page Not Found");
      }
    })
  }

  // res.end('Hello')
})

server.listen(8000, () => console.log('Server is Running on port 8000')
);