/*
jQuery(document).ready(function($) {  
	$(window).load(function(){
		//$('#loading').fadeOut('slow',function(){$(this).remove();});
		$('#loading').fadeTo('slow',.0);
		document.getElementById("loading").style.display = "none";
	});
    
});
*/
var loader = document.getElementById("loading");

window.addEventListener("load", function(){
	loader.style.display = "none";
});





