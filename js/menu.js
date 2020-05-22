$(document).ready(main);

// Función que oculta o muestra el menu de dispositivo móvil cuando pulsamos
// en icono o la barra del menú de dispositivo móvil.

// También se controla el desplegar los sub-menús.

var contador = 1;

function main (){
	$('.menu_bar').click(function(){

		if (contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		};
		
	});

	// Mostramos y ocultamos submenus
	
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});

};