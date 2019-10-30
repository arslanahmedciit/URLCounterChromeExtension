chrome.tabs.onActivated.addListener( function(info) {
	chrome.tabs.get(info.tabId, function(tab){
    var base_url = tab.url;
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
	});
  });	
});