var firstHref = $("a[href^='http']").eq(0).attr("href");
var base_url = $(location).attr("href");

var storage = chrome.storage.local;
var v1 = 'k1';

storage.get(base_url, function(result) {
	var value = result[base_url];
	value++;
	storage.set({
	[base_url]: value
	});
	storage.set({
	[v1]: value
	});
    console.log(base_url, result);
});

//chrome.storage.sync.set({base_url: "0"}, function() {
//	debugger;
 //   console.log('Value is set to ' + 0);
//});
  
//chrome.storage.sync.get(base_url, function(result) {
//	debugger;
//console.log('Value currently is ' + result.key);
 // var i = result.key;
//  i++;
 // chrome.storage.sync.set({base_url: i}, function() {
 //         console.log('Value is set to ' + i);
 // });
//});
		
//if(chrome.storage.sync.get(base_url)){
//	debugger;
//	var i = chrome.storage.sync.get(base_url);
//	i++;
//	chrome.storage.sync.set(base_url, i);
//}
//else{
//	chrome.storage.sync.set(base_url, 0);
//}