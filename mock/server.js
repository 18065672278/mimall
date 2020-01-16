let http = require('http');
let fs = require('fs');
let url = require('url');
//获取轮播图数据  /sliders
let sliders = require('./sliders');
function read(http,cb) {//读取内容
  fs.readFile(http, 'utf-8', function (err, data) {
    if (err || data.length == 0) {
      cb([]);//如果有错误，或者文件没长度就是空数组
    } else {
      cb(JSON.parse(data));//将读出来的内容转换成对象
    }
  })
}
let pageSize = 5;//每一页显示五个
http.createServer((req, res) => {
  /*//解决跨域问题
  //让options请求快速返回*/
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.setHeader("X-Powered-By", '3.2.1');
  if (req.method == 'OPTIONS') return res.end();
  let {pathname, query} = url.parse(req.url, true);//true 把query转换成对象

  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8');
    return res.end(JSON.stringify(sliders))
  }
  if (pathname === '/navs') {
    read('./navs.json',function (navs) {
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      res.end(JSON.stringify(navs))
    })
  }
  if (pathname === '/indexBlock') {
    read('./index-block.json',function (indexBlock) {
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      res.end(JSON.stringify(indexBlock))
    })
  }
  if (pathname === '/goodsDetail') {
    let id = parseInt(query.id);
    console.log(id);
    read('./goodsDetail.json',function (goodsDetails) {
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      let goodsDetail = goodsDetails.filter((item)=>{
        return id == item.id
      })
      res.end(JSON.stringify(goodsDetail))
    })
  }
}).listen(3000);
