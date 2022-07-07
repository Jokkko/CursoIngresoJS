/*
Fernandes Joaquin
Div Y
Ej 9 E/S
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaro las dos variables
	let sueldo, aumento;

	//Le otorgo valor a sueldo a traves de txtid y lo transformo en numero con parseInt
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	//Calculo la cantidad de dinero para un aumento del 10% del sueldo
	aumento = (sueldo * 10) / 100;
	
	//Sumo el aumento al sueldo
	sueldo = sueldo + aumento;

	//Muestro el sueldo con el aumento a traves de txt id
	document.getElementById("txtIdResultado").value = sueldo;
	
}
