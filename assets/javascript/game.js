$( document ).ready(function() {

	var numberToGuess = 50;

	var counter = 0;

	$('#randomNumber').text(numberToGuess);

	$('.crystals').on('click', function() {
		alert('You\'ve collected a crystal skull!');
		counter = counter + 10;
		
		if (counter == numberToGuess) {
			alert('You won! You escaped with the crystals and your life!');
		}

		else if(counter > numberToGuess) {
			alert('You lost -- the walls caved in.');
		}
	});

});



// The computer will display a random number BETWEEN 19 AND 120 -- see the random number generator we made in class.
// Each of the four crystals has A HIDDEN RANDOM VALUE BETWEEN 1 AND 12.
// Run the function.
// When a player clicks on a crystal button, it will add a specific amount of points to the player's total score.
// If the player's score matches the random number.
// If the player's score goes higher than the random number, they lose the game.
// Total score is displayed and updated after each click -- BUT THE VALUE OF EACH CRYSTAL IS NOT DISPLAYED.
// Update number of games won and lost.  Scoring system:
// Matching the random number = 1 win.
// If player's score goes higher than the random number = 1 loss.
// Win or lose, the game is, "reset," which will run the function at the beginning all over again.
// When reset:
// New random number...
// All crystals have four different hidden values...
// Player's total score is reset to zero -- except that in the video demo, the score is carried over.