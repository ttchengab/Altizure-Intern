var http = require('http');
var url = require('url');
const puppeteer = require('puppeteer');
var flag = 0;
const OUT_FILE = 'testSDK.html';
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

function sc(){
  (async () => {
    var server = http.createServer(function (req, res){
      urlData = url.parse(req.url, true);
      action = urlData.pathname;
      res.writeHead (200,{'Content-Type':'text/html'});
      if (req.method == "POST")  {
        flag = 1;
        console.log("Got Request!");
      }
    })
    server.listen(3000);
    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
    //  headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({width: 5960, height: 4209})
    await page.goto(`file://${process.cwd()}/${OUT_FILE}`);
    console.log("hi");
    await timeout(10000);
    if(flag == 1){
      await page.screenshot({path: '/home/pptruser/example.png'});
    }
    await timeout(1000);
    await browser.close();
    console.log("process finished");
  })();
}

sc();
