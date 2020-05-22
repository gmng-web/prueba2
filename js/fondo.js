$(document).ready(function(){

// Función que realiza el desplazamiento de la imagen de fondo.
// Miramos la posición en la barra desplazamiento y si no es menor deltamaño de la imagen de fondo
// variamos la posición de esta.

	var ancho = $(document).height();
 
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		// Si trabajamos con una imagen desactivamos el background-size:cover;
		if (ancho <= 1350){
			$('body').css({
				'background-size': 'initial'
			});
		}

		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
 
});