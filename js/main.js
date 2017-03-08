//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e) {
	//Get form values
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;

	var bookmark ={
		name: siteName,
		url: siteUrl
	}

	/*
		//Local storage test
		localStorage.setItem('test', 'Hello world');
		console.log(localStorage.getItem('test'));
		localStorage.removeItem('test');
		console.log(localStorage.getItem('test'));
	*/

	//Test if bookmarks
	if (localStorage.getItems('bookmarks') === null) {
		//Init array
		var bookmarks = [];
		//Add to array
		bookmarks.push(bookmark);

		//set to local storage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		//get bookmarks from localstorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		//Add booksmark to array
		bookmarks.push(booksmark);
		//Re-set back to localstorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	//Re-fetch bookmarks
	fetchBookmarks();

	//Prevent form from submitting
	e.preventDefault();
}

//Delete bookmark
function deleteBookmark (url) {
	//Get bookmarks from localstorage
	var bookmarks = JSON.parse(localStorage.getItem('booksmars'));

	//Loop throught bookmarks
	for (var i = 0; i < bookmarks.length; i++) {
		if (bookmarks[i].url == url) {
			//Remove from array
			bookmarks.splice(i, 1);
		}
	}
	//Re-set back to localstorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	//Re-fetch bookmarks
	fetchBookmarks();

}

//Fetch bookmarks
function fetchBookmarks () {
	// Get bookmarks from localstorage
	var bookmarks = JSON.parse(localStorage.getItem('booksmars'));

	//Get output id
	var bookmarksResults = document.getElementById('bookmarksResults');

	//Build output
	bookmarksResults.innerHTML = '';

	for (var i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		bookmarksResults.innerHTML += '<div class="well">' + 
										'<h3>'+name+
										'<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>' +
										'<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>' +
										'</h3>'
										'</div>';
	}
}