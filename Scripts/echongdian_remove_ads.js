
/*
引用地址 https://raw.githubusercontent.com/johnmillzer/tool/refs/heads/main/Scripts/echongdian_remove_ads.js
*/
// 2024-09-29 22:33:17

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("/cms_img")) {
  // 开屏广告
  if (obj?.data?.ad?.length > 0) {
    for (let item of obj.data.ad) {
      item.set.setting.display_time = 0;
      item.creative[0].start_time = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
      item.creative[0].end_time = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
    }
  }
}


$done({ body: JSON.stringify(obj) });
