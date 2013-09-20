$(function() {

	$( ".tweet-compose" ).click(function() {
		$( ".tweet-controls" ).show( "fast" );
		$( this ).removeClass( "tweet-compose" ).addClass( "tweet-compose-expand" );
	});

	$( ".tweet-compose" ).focusout(function() {
		$( ".tweet-controls" ).hide( "fast" );
		$( this ).removeClass( "tweet-compose-expand" ).addClass( "tweet-compose");
	});

	$( ".tweet-compose").keyup(function () {
		var max = 140;
		var lengths = $(this).val().length;
		var characters = max - lengths;
		  if (lengths >= max) {
		    $(".char-count").text( '-' + (lengths - max));
		    $(".tweet-content button").removeClass( "alive");
		  } else {
		  	$(".char-count").text( characters );
		    $(".tweet-content button").addClass( "alive");
		  }
		  if (lengths >= max-10) {
		    $(".char-count").addClass( "char-count-red");
		  } else {
		  	$(".char-count").removeClass( "char-count-red");

		  }
		});




});

