var http = require('http');
var url = require('url');
const puppeteer = require('puppeteer');
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
function sc(){
  (async () => {
    const browser = await puppeteer.launch({
      //headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({width: 5960, height: 4209})
    await page.goto('file:///C:/Users/TimCheng/Desktop/Everest%20Intern/Puppeteer/testSDK.html', );
    await timeout(20000);
    await page.screenshot({path: 'example.png'});
    await browser.close();
  })();
}
var server = http.createServer(function (req, res){
  urlData = url.parse(req.url, true);
  action = urlData.pathname;
  res.writeHead (200,{'Content-Type':'text/html'});
  if (action == "/Signup")
  {
    res.end ("<h1>hello Node.js</h1>");
    sc();

  }
  else
  {
    res.end ("<h1>hello Node.js</h1>");
    sc();
  }
  
})

 
server.listen(3000);