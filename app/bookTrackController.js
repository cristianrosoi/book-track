angular
	.module("bookTrack")
	.controller("bookTrackController", function($scope, bookTrackFactory){

		$scope.books;

		bookTrackFactory.getBooks().success(function(data){
			$scope.books = data;
		}).error(function(error){
			console.log(error);
		});

	});