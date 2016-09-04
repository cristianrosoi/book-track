angular
	.module("bookTrack")
	.factory("bookTrackFactory", function($http) {
		
		function getBooks() {
			return $http.get("data/data.json");
		}

		return {
			getBooks: getBooks
		}

	});