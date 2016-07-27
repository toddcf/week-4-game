$( document ).ready(function() {

	crystalCollector();
	function crystalCollector() {

	// numberToGuess = maxValue
	// Set minimum value to 19.
	// Set max value to 120.
	var maxValue = Math.floor(Math.random() * (120 - 19)) + 19;
			console.log(maxValue);
			// Not sure if the line of code below is doing anything.
			// $('#maxValue').html();

	var blueCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
			console.log(blueCrystal);

	var greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
			console.log(greenCrystal);

	var redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
			console.log(redCrystal);

	var violetCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
			console.log(violetCrystal);

	var counter = 0;

	var wins = 0;

	var losses = 0;

	// This displays the maxValue to the screen.
	$('#maxValue').text(maxValue);

	// for (var i = 0; i < crystalValues.length; i++){

	// 	// What does this do?? I'm suspicious of it!
	// 	var imageCrystal = $('<img>');

	// 	imageCrystal.attr('data-num', crystalValues[i]);


	// }


	/* The below code is all-encompassing for anything with a .crystals class.
	I'm going to try doing each crystal individually.
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
}
});



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