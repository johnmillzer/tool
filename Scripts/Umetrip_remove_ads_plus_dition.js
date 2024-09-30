
/*
引用地址 https://raw.githubusercontent.com/johnmillzer/tool/refs/heads/main/Scripts/Umetrip_remove_ads_plus_dition.js
*/
// 2024-09-29 16:39:43

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("/ngstatic/static/fourthIndex")) {
  if (obj && obj.adDesc) {
    obj.adDesc = {};
  }
}


$done({ body: JSON.stringify(obj) });
