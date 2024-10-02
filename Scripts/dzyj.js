/*
项目名称：地震预警
下载地址：https://t.cn/A6CoMiO5
更新日期：2024-10-02
脚本作者：chxm1023,jm
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
*/

const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);
  obj = {
    "message" : "查询成功",
    "data" : {
      "endTime" : 4092599349000
    },
    "code" : 0
  };

/*
let obj = JSON.parse($response.body);
if (url.includes("v1/appConfig/fromDB")) {
  
  obj = {
    "message" : "查询成功",
    "data" : {
      "endTime" : 4092599349000
    },
    "code" : 0
  };
  
  if (obj && obj.data && obj.data.banner) {
    obj.data.banner = {};
  }

  if (obj && obj.data && obj.data.reward && obj.data.reward.isOn) {
    obj.data.reward.isOn = "false";
  }

  if (obj && obj.data && obj.data.vipAd && obj.data.vipAd.isOn) {
    obj.data.vipAd.isOn = "false";
  }

  if (obj && obj.data && obj.data.newsBanner && obj.data.newsBanner.isOn) {
    obj.data.newsBanner.isOn = "false";
  }

  if (obj && obj.data && obj.data.startAd && obj.data.startAd.isOn) {
    obj.data.startAd.isOn = "false";
  }

  if (obj && obj.data && obj.data.vipPopAd && obj.data.vipPopAd.isOn) {
    obj.data.vipPopAd.isOn = "false";
  }

  if (obj && obj.data && obj.data.popupAd && obj.data.popupAd.isOn) {
    obj.data.popupAd.isOn = "false";
  }

  if (obj && obj.data && obj.data.encourage && obj.data.encourage.isOn) {
    obj.data.encourage.isOn = "false";
  }

}
*/

$done({ body: JSON.stringify(obj) });
