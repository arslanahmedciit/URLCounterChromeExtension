// background.js

// Called when the user clicks on the browser action.
chrome.tabs.onActivated.addListener( function(info) {
	chrome.tabs.get(info.tabId, function(tab){
    var base_url = tab.url;
	var storage = chrome.storage.local;
	var v1 = 'k1';

	debugger;
	storage.get(base_url, function(result) {
		debugger;
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
  });
	
});