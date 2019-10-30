var firstHref = $("a[href^='http']").eq(0).attr("href");
var base_url = $(location).attr("href");

var storage = chrome.storage.local;
var v1 = 'k1';

storage.get(base_url, function(result) {
	var value = result[base_url];
	value++;
	//storage.set({
	//[base_url]: value
	//});
	//storage.set({
	//[v1]: value
	//});
});
