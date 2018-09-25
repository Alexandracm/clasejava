/*
var numero1=10.5;
var numero2=5;
var resultado= numero1*numero2;
console.log (resultado);

var nombre ='Alexandra ';
var profesion ="Desarrollador Full Stack";
console.log (nombre+profesion);

var tiene_mascota =true;
console.log (tiene_mascota);
var datos=["juan", 26,false,25,78,"Desarrollador"];
console.log(datos[1]);

var edad=20;
if (edad>17){
	console.log("Eres mayor de edad");
}
 
var edad=18;
if (edad>=18){
	console.log("Eres mayor de edad");
}

var edad=41;
if (edad>=18&& edad<=40){
	console.log ("Eres mayor de edad");
}else{

	console.log("No Eres un adulto mayor");
}


/* ciclos  Estructura FOR


var dias=['lunes', 'Martes' ,'miercoles' ,'jueves' ,'viernes' ,'sabado', 'domingo'];

for (var i= 0; i< 7;i++){
	console.log(dias[i]);
}


function suma(numero1,numero2) {
	var resultado= numero1+numero2;
	return resultado;
	
}

/*invocar

var res=suma(88,55);
console.log(res);





function iva (precio producto) {
	var iva_producto=precio_producto*0.19;
	return iva_producto;


	var res= iva(1000);
	console.log (res);



	var titulos= document.getElementsByTagName('h1');
	console.log (titulos);

   var clasetexto= document.getElementsByClassName('texto');
   console.log (clasetexto);


   var sede= document.getElementsByid('sede');
console.log(sede);


*/



function iva (precio_producto,porcentaje_iva) {
	var iva_producto=precio_producto*(porcentaje_iva/100);
	return iva_producto;
}

function calcular_iva(){
var precio= parseInt(document.getElementById('precio').value);
var porcentaje_iva= parseInt(document.getElementById('iva').value);
var resultado=iva(precio,porcentaje_iva);
var salida= document.getElementById('resultado');
salida.value=resultado;
console.log(resultado);



/*
console.log(precio);
console.log (porcentaje_iva);
	
*/
}











