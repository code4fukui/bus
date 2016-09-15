// 京福バスAPI Wrapper
// http://busnavi.keifuku.co.jp/webapi/index.html
// CC BY http://fukuno.jig.jp/

var callbackKeifuku = function(fn, callback) {
	var KEIFUKUAPI_BASE = "http://busnavi.keifuku.co.jp:81/";
	if (fn.indexOf('?') >= 0) {
		fn += "&callback=" + getCallbackMethod(callback);
	} else {
		fn += "?callback=" + getCallbackMethod(callback);
	}
	jsonp(KEIFUKUAPI_BASE + fn);
};

/*
1	rosenid	路線番号
2	rosenname	路線名
3	keitoid	系統番号
4	ikisaki	行き先
*/
var getKeifukuBusLine = function(callback) {
	callbackKeifuku("rosenkeitobusLookup.php", callback);
};
/*
rosen
1	rosenid	路線番号
2	rosenname	路線名
list（配列）
3	odr	通過バス停順序
4	name	バス停名
緯度経度がない！
*/
var getKeifukuBusStop = function(rosen, keito, callback) {
	callbackKeifuku("busstopLookup.php?rosenid=" + rosen + "&keitoid=" + keito, callback);
};
/*
realtime（配列）
1	rosenid	路線番号
2	keitoid	系統番号
3	lat	緯度
4	lon	経度
5	busstopodr	次のバス停順序
6	datetime	バスからの送信日時 YYYYMMDDhhmmss
*/
var getKeifukuBusPosition = function(rosen, keito, callback) {
	callbackKeifuku("rosenLookup.php?rosenid=" + rosen + "&keitoid=" + keito, callback);
};
