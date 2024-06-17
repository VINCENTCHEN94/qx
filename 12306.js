const version = 'V1.0.22';

var obj = JSON.parse($request.body),
12306 = {};
"0007" == obj.placementNo ? (12306.materialsList = [{
	billMaterialsId: "6491",
	filePath: "12306",
	creativeType: 1
}], 12306.advertParam = {
	skipTime: 1
},
12306.code = "00") : 12306 = "G0054" == obj.placementNo ? {
	code: "00",
	materialsList: [{}]
}: {
	code: "00",
	message: "无广告返回"
},
$done({
	body: JSON.stringify(12306)
});
