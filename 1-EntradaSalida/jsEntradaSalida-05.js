/*
Fernandes Joaquin
Div Y
Ej 5 E/S
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//defino variables edad y nombre
	let nombre, edad;
	
	//a la variable edad le asigno el valor de la id txtIdEdad
	edad = document.getElementById("txtIdEdad").value;
	 
	//a la variable nombre le asigno el valor de la id txtIdNombre
	nombre = document.getElementById("txtIdNombre").value;

	//Muestro en pantalla las dos variables concatenando strings y las variables
	alert("Usted se llama " + nombre + " y tiene " + edad + " años.");
}

