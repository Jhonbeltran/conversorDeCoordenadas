

function inicio (){
	var convertir = document.getElementById("convertir");
	convertir.addEventListener("click", transformar)
	var limpiar = document.getElementById("limpiar");
	limpiar.addEventListener("click", barrer);
}

 function transformar () {
 	var primero = document.getElementById("primero");
	primero = Number(primero.value);
	var segundo = document.getElementById("segundo");
	segundo = Number(segundo.value);
	var tercero = document.getElementById("tercero");
	tercero = Number(tercero.value);
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");

 	
	if(document.desde.R[0].checked && document.hasta.R[0].checked){
		alert("No necesitas hacer la conversión de rectangulares a rectangulares")
	}
 	else if(document.desde.R[0].checked && document.hasta.R[1].checked){
		var p = Math.sqrt(Math.pow(primero, 2) + Math.pow(segundo, 2)+Math.pow(tercero, 2));
		var teta = Math.atan(segundo/primero);
		var fi = Math.acos(tercero / p);
		uno.innerHTML = "p = "+p;
	 	dos.innerHTML = " θ = "+teta;
	 	tres.innerHTML =" φ = "+fi;
	}
	else if (document.desde.R[0].checked && document.hasta.R[2].checked){
		var r = Math.pow(primero, 2) + Math.pow(segundo, 2);
	 	var teta = Math.atan(segundo/primero); 
	 	var z = tercero;
	 	uno.innerHTML = "r = "+r;
	 	dos.innerHTML = " θ = "+teta;
	 	tres.innerHTML =" z = "+z;
	}
	else {
		alert ("me dio locha hacer mas, voy a ver si puedo hacer visual el pi");
	}
}

function barrer() {
	var primero = document.getElementById("primero");
	primero.value = "";
	var segundo = document.getElementById("segundo");
	segundo.value = "";
	var tercero = document.getElementById("tercero");
	tercero.value = "";
	var uno = document.getElementById("uno");
	uno.innerHTML= "_"
	var dos = document.getElementById("dos");
	dos.innerHTML= "_"
	var tres = document.getElementById("tres");
	tres.innerHTML= "_"
}




