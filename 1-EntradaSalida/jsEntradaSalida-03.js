/*
Fernandes Joaquin
Div Y
Ej 3 E/S

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;


	//nombreIngresado=txtIdNombre.value;
	//Guardar el nombre en la variable nombreIngresado
	nombreIngresado = document.getElementById("txtIdNombre").value;

	/* 
		document.getElementById("txtIdNombre").value;
		
		document. ingresa al documento 
		
		getelementbyid, va al elemento con el id especificado 
		
		("") se ingresa el id  
		
		.value ingresa al valor
	*/
	alert(nombreIngresado);
	



}


