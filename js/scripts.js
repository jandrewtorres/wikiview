function getRandomPage() {
	$.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&list=random&rnlimit=1&callback=?", function(json) {
		console.log(json);
	});
}

function getPages(query) {
	$.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + query + "&srwhat=title&limit=20&callback=?", function(json) {
		console.log(json);
	});
}

$(document).ready(function() {
	getPages('hello');
});