// 2024-10-20 15:24:05
// 平安好车主去广告

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("maam/plugin/getPluginListV4.do")) {
  if (obj && obj.baseInfo) {
    obj.baseInfo.baseShowTime = "3818332800"
  }
  if (obj && obj.data) {
    obj.data[0].bgImgUrl = ""
    obj.data[1].bgImgUrl = ""
  }
}

$done({ body: JSON.stringify(obj) });

/*
const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("maam/plugin/getPluginListV4.do")) {
  if (obj && obj.data) {
    obj.data[0]. = ""
  }
}

$done({ body: JSON.stringify(obj) });


*/
