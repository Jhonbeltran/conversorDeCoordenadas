

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

 	

 	if(document.desde.R[0].checked && document.hasta.R[2].checked){
		var r = Math.pow(primero, 2) + Math.pow(segundo, 2);
	 	var teta = Math.atan(segundo/primero); 
	 	var z = tercero;
	 	uno.innerHTML = r;
	 	dos.innerHTML = teta;
	 	tres.innerHTML = z;
	}
	else {
		alert("Jajaja, ¿es enserio?, no intentes engañarme, se que no es verdad")
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




