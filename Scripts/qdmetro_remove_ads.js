// 2024-09-30 18:50:25
// 青岛地铁去开屏广告

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("ngstatic/appScreenAds/requestAds")) {
  if (obj && obj.data) {
    obj.data = {};
  }
}

if (url.includes("/ngstatic/static/fourthIndex")) {
  if (obj && obj.data && obj.data.ads) {
    obj.data.ads = {};
    obj.data.topAds = {};
  }
}

$done({ body: JSON.stringify(obj) });
