//need to install express to run off server to avoid cross-origin errors

angular.module('deck', []);

angular
	.module('deck')
	.controller('DeckCtrl', function($http, $q){
		var dc = this;

		//need to get new deck after each draw because you can only draw 52 cards once. there's probably another API call you can get to shuffle cards but this is only two calls.

		dc.deckCall = function(){
			return $http({
				method: 'GET',
				url: 'http://deckofcardsapi.com/api/deck/new/'
			})
		}

		dc.drawCard = function(newDeck){
			return $http({
				method: 'GET',
				url: 'http://deckofcardsapi.com/api/deck/' + newDeck + '/draw/?count=52'
			})
		}

		dc.deckCall().then(function(res){
			var newDeck = res.data.deck_id;
			dc.drawCard(newDeck).then(function(res){
				//console.log(res.data);
				dc.cards = res.data.cards;
			})
		})

	});