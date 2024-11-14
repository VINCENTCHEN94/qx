const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

// 打印过滤前的 obj.result
console.log("过滤前的 obj.result:", obj.result);

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
console.log("过滤后的 obj.result:", obj.result);

$done({ body: JSON.stringify(obj) });
