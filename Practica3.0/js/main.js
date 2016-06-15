$(document).ready(function() {
	$(".btn").click(function(){
		$(".cuadro").fadeToggle(2000, function(){
			$(".circulo").fadeToggle(2000);
		});
	});
});