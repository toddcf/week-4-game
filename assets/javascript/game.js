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

	// Assigns a variable for each crystal.
	// Each new game, each crystal is assigned a new random number between 1 and 12.
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

	// When the blue crystal is clicked, its current value is added to the counter.
	$('#blue').click(function() {
		counter = counter + blueCrystal;
		$('#yourNumber').text(counter);
		
		if (counter == maxValue) {
			alert('You won! You escaped with the crystals and your life!');
			wins = wins + 1;
			$('#yourWins').text(wins);
			crystalCollector();
		}

		else if(counter > maxValue) {
			alert('You lost -- the walls caved in.');
			losses = losses + 1;
			$('#yourLosses').text(losses);
			crystalCollector();
		}
	});

	// When the green crystal is clicked, its current value is added to the counter.
	$('#green').click(function() {
		counter = counter + greenCrystal;
		$('#yourNumber').text(counter);
	
		if (counter == maxValue) {
			alert('You won! You escaped with the crystals and your life!');
			wins = wins + 1;
			$('#yourWins').text(wins);
			crystalCollector();
		}

		else if(counter > maxValue) {
			alert('You lost -- the walls caved in.');
			losses = losses + 1;
			$('#yourLosses').text(losses);
			crystalCollector();
		}
	});

	// When the red crystal is clicked, its current value is added to the counter.
	$('#red').click(function() {
		counter = counter + redCrystal;
		$('#yourNumber').text(counter);

		if (counter == maxValue) {
			alert('You won! You escaped with the crystals and your life!');
			wins = wins + 1;
			$('#yourWins').text(wins);
			crystalCollector();
		}

		else if(counter > maxValue) {
			alert('You lost -- the walls caved in.');
			losses = losses + 1;
			$('#yourLosses').text(losses);
			crystalCollector();
		}
	});

	// When the violet crystal is clicked, its current value is added to the counter.
	$('#violet').click(function() {
		counter = counter + violetCrystal;
		$('#yourNumber').text(counter);

		if (counter == maxValue) {
			alert('You won! You escaped with the crystals and your life!');
			wins = wins + 1;
			$('#yourWins').text(wins);
			crystalCollector();
		}

		else if(counter > maxValue) {
			alert('You lost -- the walls caved in.');
			losses = losses + 1;
			$('#yourLosses').text(losses);
			crystalCollector();
		}
	});

	// for (var i = 0; i < crystalValues.length; i++){

	// 	// What does this do?? I'm suspicious of it!
	// 	var imageCrystal = $('<img>');

	// 	imageCrystal.attr('data-num', crystalValues[i]);


	// }


	// The below code is all-encompassing for anything with a .crystals class.
	// I'm going to try doing each crystal individually.
	// $('.crystals').on('click', function() {
	// 	// alert('You\'ve collected a crystal skull!');
	// 	counter = counter + parseInt($(this).data('num'));

 	// This line holds a "0" in each scoreboard field before you start clicking crystals and earning points.
	$('#yourNumber').text(counter);
	$('#yourWins').text(wins);
	$('#yourLosses').text(losses);
		
	
};

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