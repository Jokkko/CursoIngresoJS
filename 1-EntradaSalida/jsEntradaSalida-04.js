/* 
Fernandes Joaquin
Div Y
Ej 4 E/S

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Defino la variable nombre
	let nombre;
	
	//Le doy un valor a la variable nombre
	nombre = prompt("Ingresa un nombre:");
	
	//Intercambio el valor de txtidnombre.value por la variable nombre
	document.getElementById("txtIdNombre").value = nombre;
	
}
		
