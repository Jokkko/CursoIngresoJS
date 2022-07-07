/*
Fernandes Joaquin
Div Y
Ej 6 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaro las variables
	let number1, number2, plus;

	//Cambio el valor de mis variables por los txtId.value
	number1 = document.getElementById("txtIdNumeroUno").value;
	number2 = document.getElementById("txtIdNumeroDos").value;
	
	//Les aplico parseInt para transformarlos en enteros
	number1 = parseInt(number1);
	number2 = parseInt(number2);
	
	//Cambio el valor de mi variable plus por la suma de los dos numeros obtenidos
	plus = number1 + number2;
	
	//Muestro en pantalla el valor de la variable con la suma
	alert("La suma es " + plus);
}

