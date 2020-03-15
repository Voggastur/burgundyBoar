$(document).ready(function() {


 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
    });

    /* Example of method chaining in $("p") */

    $("p").css("color", "blue").slideUp(1000).slideDown(1000);
    $(".bottom_button").attr("href", "http://www.example.com");
});

/* Examples $

$(document).ready(function() {
	$("h2").addClass("underline");
	$("ul").addClass("border");
	$("h2").removeClass("underline");
	$("ul").removeClass("border");
	$("tr:odd").addClass("odd");
    $("tr:even").addClass("even");

    $("#stream1_btn").click(function() { // You can also use .mouseenter or .mouseleave
 		$(".stream1").hide('medium');
		$(".stream1").show('slow');
		$(".stream1").show('medium');
          $(".stream1").show('fast');
          $(".stream1").show(1000);
	});
$(".stream1").toggle('medium'); // Usually toggles another element than the specific toggler
$(".stream1").slideDown('medium');
$(".stream1").slideUp('medium');
$(".stream1").slideToggle('medium');

$(".stream1").fadeIn('medium');
$(".stream1").fadeOut('medium');
$(".stream1").fadeToggle('medium');

$(".stream1").fadeTo(1000, 0.7); // Partial fade in to opacity 0.7 (transparent)

*/

});