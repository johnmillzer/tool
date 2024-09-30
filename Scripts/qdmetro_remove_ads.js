// 2024-09-30 18:50:25
// 青岛地铁去开屏广告

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("ngstatic/appScreenAds/requestAds")) {
  if (obj && obj.data && obj.data.duration) {
    obj.data.duration = "0";
  }
}

$done({ body: JSON.stringify(obj) });
