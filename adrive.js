const url = $request.url;
console.log("请求的 URL:", url); // 打印请求的 URL 以确认路径
console.log("响应体:", $response.body); // 打印原始响应体内容

if (!$response.body) {
  console.log("响应体为空，结束脚本");
  $done({});
} else {
  let obj = JSON.parse($response.body);

  // 打印整个解析后的 obj
  console.log("解析后的 obj:", JSON.stringify(obj, null, 2));

  if (obj.result?.length > 0) {
    obj.result = obj.result.filter(
      (i) =>
        ![
          "backup_list_under_mydevice_banner",
          "backup_top_banner",
          "home_bulletin_board",
          "home_top_banner",
          "resource_top_banner",
          "video_top_banner"
        ]?.includes(i?.anchor)
    );
    console.log("过滤后的 obj.result:", JSON.stringify(obj.result, null, 2));
  }

  $done({ body: JSON.stringify(obj) });
}
