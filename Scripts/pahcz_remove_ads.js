// 2024-10-20 15:24:05
// 平安好车主去广告

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("download/bpgbd-sys-sf-prd/")) {
  if (obj && obj.data) {
    obj.data.needLogin = "Y";

  }
}

$done({ body: JSON.stringify(obj) });
