var storage = chrome.storage.local;
var v1 = 'k1';

storage.get(v1, function(result) {
	document.getElementById("p1").innerHTML = result[v1];
});

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function() {
	var x = document.getElementById("myText").value;
	storage.clear();
	storage.set({
	[x]: 0
	});
	document.getElementById("p1").innerHTML = "0";
    }, false);
}, false);