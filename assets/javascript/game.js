$( document ).ready(function() {

	// numberToGuess = maxValue
	// Set minimum value to 19.
	// Set max value to 120.
	var maxValue = Math.floor(Math.random() * (120 - 19)) + 19;
			console.log(maxValue);
			// Print the number to the screen.
			$('#maxValue').html();

	var counter = 0;

	var wins = 0;

	var losses = 0;

	// Four numbers between 1 and 12.
	// They are supposed to be randomly generated (and therefore different) each game.
	// numbers = crystalValues
	var crystalValues = [6, 10, 1, 3];

	$('#maxValue').text(maxValue);

	// for (var i = 0; i < crystalValues.length; i++){

	// 	// What does this do?? I'm suspicious of it!
	// 	var imageCrystal = $('<img>');

	// 	imageCrystal.attr('data-num', crystalValues[i]);


	// }

	$('.crystals').on('click', function() {
		// alert('You\'ve collected a crystal skull!');
		counter = counter + parseInt($(this).data('num'));

		// NOTE: This is giving me NaN (Not a Number).
		$('#yourNumber').text(counter);
		
		if (counter == maxValue) {
			alert('You won! You escaped with the crystals and your life!');
			$('#yourWins').text(wins);
		}

		else if(counter > maxValue) {
			alert('You lost -- the walls caved in.');
			$('#yourLosses').text(losses);
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
	// Player's "Total Value of Crystals You're Holding" is reset to zero.