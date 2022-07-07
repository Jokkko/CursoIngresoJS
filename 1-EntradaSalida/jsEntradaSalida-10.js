/*
Fernandes Joaquin
Div Y
Ej 10 E/S
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declarar variables
	let importe, descuento;

	//Darle valor a la variable importe a traves de un txtid y un parse int
	importe = parseInt(document.getElementById("txtIdImporte").value);

	//Sacar el valor del 25% y guardarlo
	descuento = (importe*25)/100;
	//Descontar el 25% del importe, al importe
	importe = importe - descuento;
	//Mostrarlo por id
	document.getElementById("txtIdResultado").value =  importe;
	
}
