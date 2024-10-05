// 2024-10-05
// 晓晓优选去广告

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

obj.data = []

$done({ body: JSON.stringify(obj) });
