/*1.
Fernandes Joaquin
Div Y
TP 1 
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declarar variables
    let precio1, precio2, precio3, suma;
    //Los ID a usar son: txtIdPrecioUno, txtIdPrecioDos, txtIdPrecioTres

    //Transformo los string de los txtid a int y los guardo en mis variables
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;

    alert("La suma de los tres precios es: " + suma);
	
}
function Promedio () 
{
    //Declarar variables
    let precio1, precio2, precio3, promedio;
    
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	
    promedio = (precio1 + precio2 + precio3)/3;

    alert("El promedio de los tres precios es: " + promedio);
}
function PrecioFinal () 
{
    //Declarar variables
    let precio1, precio2, precio3, preciofinal, iva;
    
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

	preciofinal = precio1 + precio2 + precio3;
    iva = (preciofinal*21)/100;
    preciofinal = preciofinal + iva;
    
    alert("El precio final es de: " + preciofinal + " (El precio final cuenta con iva incluido)");
	
}   