function cond_if() {
	var numero = document.getElementById("numero").value;

	if(numero == "2") {
		document.getElementById("resultado_if").innerHTML = "el numero es igual a 2";
	} else {
		document.getElementById("resultado_if").innerHTML = "el numeor es distinto a 2";
	}
}

function condicional_switch() {
	var mes = document.getElementById("mes").value;

	switch(mes) {
		case "1":
			document.getElementById("resultado_mes").innerHTML = "Enero";
		break;

		case "2":
			document.getElementById("resultado_mes").innerHTML = "Febrero";
		break;

		case "3":
			document.getElementById("resultado_mes").innerHTML = "Marzo";
		break;

		case "4":
			document.getElementById("resultado_mes").innerHTML = "Abril";
		break;

		case "5":
			document.getElementById("resultado_mes").innerHTML = "Mayo";
		break;

		case "6":
			document.getElementById("resultado_mes").innerHTML = "Junio";
		break;

		case "7":
			document.getElementById("resultado_mes").innerHTML = "Julio";
		break;

		case "8":
			document.getElementById("resultado_mes").innerHTML = "Agosto";
		break;

		case "9":
			document.getElementById("resultado_mes").innerHTML = "Septiembre";
		break;

		case "10":
			document.getElementById("resultado_mes").innerHTML = "Octubre";
		break;

		case "11":
			document.getElementById("resultado_mes").innerHTML = "Noviembre";
		break;

		case "12":
			document.getElementById("resultado_mes").innerHTML = "Diciembre";
		break;

		default:
			document.getElementById("resultado_mes").innerHTML = "Número ingresado inválido";
		break;
	}
}

var vector = [];
function agregar_valor() {
	var new_value = document.getElementById("array_value").value;
	vector.push(new_value);
	document.getElementById("arreglo").innerHTML = vector; 
}

function objeto() {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var persona = {"nombre":nombre, "apellido":apellido};
	document.getElementById("nombre_completo").innerHTML = persona["nombre"] + " " + persona["apellido"];
}