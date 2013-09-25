$(function() {

	$( ".tweet-content .tweet-compose" ).click(function() {
		$( ".tweet-controls" ).show( "fast" );
		$( this ).addClass( "tweet-compose-expand" );
	});

	$( ".tweet-content .tweet-compose" ).focusout(function() {
		var tweetLength = $(this).keyup().val().length;
		if (tweetLength <= 0) {
			$( ".tweet-controls" ).hide( "fast" );
			$( this ).removeClass( "tweet-compose-expand" );
		}
	});

	/*$( ".tweet .content" ).mouseenter(function() {
		$( ".tweet-actions" ).show("slide", {direction: "down" }, "fast");
	});
	$( ".tweet .content" ).mouseleave(function() {
		$( ".tweet-actions" ).hide("slide", {direction: "down" }, "fast");
	});*/


	$( ".tweet-actions ul li:nth-child(2)" ).click(function() {
		var tweettoretweet = $(".content .avatar, .fullname, .username, .tweet-text").clone();
		$( tweettoretweet ).appendTo(".modal-body");
		$('#myModal').modal('show');
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
		  if (lengths <= 0) {
		    $( ".tweet-content button").removeClass("alive");
		  }
	});

	$( ".tweet-content button").click(function(){
		var tweetLength = $(".tweet-content .tweet-compose").keyup().val().length;
		var tweetText = $(".tweet-content .tweet-compose").val();
		var picsrc = $( ".profile-summary .content .avatar").attr( "src");
		var name = $( ".profile-summary .content p" ).text();
		if (tweetLength <= 1 || tweetLength >= 140) 
			return;

		var newTweet = $(".tweet:first-child").clone();

		newTweet.find( ".tweet-text" ).text( tweetText );
		newTweet.find( ".avatar" ).attr( "src", picsrc );
		newTweet.find( ".fullname" ).text( name );
		newTweet.find( ".username" ).text( "@" + name );

		$(newTweet).prependTo(".stream");

		$(".tweet-content .tweet-compose").val("");
		$( ".tweet-controls" ).hide( "fast" );
		$(".tweet-content .tweet-compose").removeClass( "tweet-compose-expand" );
	});




});

