
/*
引用地址 https://raw.githubusercontent.com/johnmillzer/tool/refs/heads/main/Scripts/echongdian_remove_ads.js
*/
// 2024-09-29 22:33:17

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("/cms_img/")) {
  // 获取开屏广告
  if (obj?.config?.backgroud?.type === "image") {
    // 将图片显示时间设置为0，并设置过期时间
    obj.config.expireTime = 3818419199000; // Unix时间戳 2090-12-31 23:59:59
    obj.config.featureTime = 3818419199000; // Unix时间戳 2090-12-31 23:59:59
    obj.config.backgroud.imageUrl = ""; // 移除图片链接
  }

  // 移除点击跳转
  if (obj?.config?.click?.type === "url") {
    obj.config.click.type = ""; // 清空点击行为
    obj.config.click.webViewContent.uri = ""; // 移除跳转链接
  }
}

$done({ body: JSON.stringify(obj) });
