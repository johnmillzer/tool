// 2024-09-30 18:50:25
// 青岛地铁去开屏广告

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("ngstatic/appScreenAds/requestAds")) {
  if (obj && obj.data && obj.data.showTime && obj.data.duration) {
    //obj.data.showTime = "23:59:58-23:59:59";
    obj.data.duration = "0";
  }
}

$done({ body: JSON.stringify(obj) });
