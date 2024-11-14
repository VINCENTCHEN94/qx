const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

// 打印整个 obj 以查看结构
console.log("完整的 obj:", JSON.stringify(obj, null, 2));

// 检查并打印 obj.result
if (obj.result) {
  console.log("过滤前的 obj.result:", JSON.stringify(obj.result, null, 2));
} else {
  console.log("obj.result 不存在或为空");
}

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
}

// 打印过滤后的 obj.result
if (obj.result) {
  console.log("过滤后的 obj.result:", JSON.stringify(obj.result, null, 2));
} else {
  console.log("过滤后的 obj.result 不存在或为空");
}

$done({ body: JSON.stringify(obj) });
