"use strict";

$("#start").click(function() {
	index = 0;
	sequence = [];
	chooseCircle();
	displaySequence();
});

var sequence = [];

//generates a random number and calls one of the circles
function chooseCircle (){
	var i = Math.floor((Math.random() * 4)+1);
	sequence.push(i);
}

function animateCircle (clickedCircle) { //independent
	$('[data-id="' + clickedCircle + '"]').animate ({
		opacity: 1.00
	}, 1000).animate ({
		opacity: 0.5
	}, 1000);
}

function displaySequence (){
	sequence.forEach(function(element, index){   // need the index to multiply the timeout
		setTimeout(function () {
			animateCircle(element);
		}, 2000*(index));
	});
	console.log(sequence);
}
var index = 0;

// continues the sequence if the correct circle is clicked
$('.circle').click(function(e) {
	var clickedCircle = $(this).data('id');
	if (clickedCircle == sequence[index]) {
		// showPrize();
		index++;
		if (index == sequence.length) {
			index = 0;
			chooseCircle();
			displaySequence();
		}
	} else if (clickedCircle != sequence[index]) {
		index = 0;
		clearTimeout();
		sequence = [];
	};
});


// function showPrize() {
// 	if (index >= 1) {
// 		$('.prize').removeId("prize1");
// 	}
// }