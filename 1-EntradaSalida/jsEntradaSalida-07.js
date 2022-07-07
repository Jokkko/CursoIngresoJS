/*
Fernandes Joaquin
Div Y
Ej 7 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Declaro variables
	let number1, number2, suma;
	
	//Cambio el valor de mis variables por los txtId.value
	//Les aplico parseInt para transformarlos en enteros
	number1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	number2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//los sumo
	suma = number1 + number2;

	//muestro el resultado de la operacion
	alert("La suma es: " + suma);	
}

function restar()
{
	//Declaro variables
	let number1, number2, resta;

	//Cambio el valor de mis variables por los txtId.value
	//Les aplico parseInt para transformarlos en enteros
	number1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	number2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//los resto
	resta = number1 - number2;

	//muestro el resultado de la operacion
	alert("La resta es: " + resta);	
	
}

function multiplicar()
{ 
	//Declaro variables
	let number1, number2, multi;

	//Cambio el valor de mis variables por los txtId.value
	//Les aplico parseInt para transformarlos en enteros
	number1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	number2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//los multiplico
	multi = number1 * number2;

	//muestro el resultado de la operacion
	alert("La multiplicacion es: " + multi);	
	
}

function dividir()
{
	//Declaro variables
	let number1, number2, divi;

	//Cambio el valor de mis variables por los txtId.value
	//Les aplico parseInt para transformarlos en enteros
	number1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	number2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//los divido
	divi = number1 / number2;

	//muestro el resultado de la operacion
	alert("La división es: " + divi);	
	
}
