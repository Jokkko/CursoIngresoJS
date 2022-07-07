/*
Fernandes Joaquin
Div Y
Ej 8 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Declaro funciones
	let dividendo, divisor, resto;

	//Otorgo valores a dividendo y a divisor a traves de txt id y los vuelvo numeros enteros con parseint
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	//Aplico la operacion y guardo el resto
	resto = dividendo % divisor;
	
	//Muestro el resto
	alert("El resto es: " + resto);
}