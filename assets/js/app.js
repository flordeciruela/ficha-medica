
var registrar = document.getElementById('submit');  //boton
var pacientes = new Array();  //Crea Array vacio

    registrar.addEventListener('click',function(event) {
    event.preventDefault();  // evita que se limpie automaticamente
          var nombre = document.getElementById('nombre').value;
          var apellido = document.getElementById('apellido').value;
          var edad = document.getElementById('edad').value;
          var genero = document.getElementById('genero').value;
          var ciudad = document.getElementById('ciudad').value;
          var pais = document.getElementById('pais').value;
          var imprimir = document.getElementById('print');

          pacientes.push(new Paciente(nombre, apellido, edad, genero, ciudad, pais));  //inserta objeto nuevo en Array
          imprimir.appendChild(pacientes[pacientes.length -1].mostrarHtml());   //mostrando ultimo objeto de Array con su metodo mostrar
          document.getElementById("ficha-medica").reset();  // limpiar formulario

  });


  function Paciente(nombre, apellido, edad, genero, ciudad, pais){

  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  this.mostrarHtml = function(){

                      var ficha = document.createElement('div');
                      var datos = document.createElement('p');
                      datos.innerHTML += "Nombre: "+this.nombre+
                                         "<br>Edad: " +this.edad+
                                         "<br>País: " +this.pais;

                      ficha.appendChild(datos);
                      return ficha;
                      };

  }

	var nombreP = document.getElementById("nombre");
	var apellidoP = document.getElementById("apellido");
	var ciudadP = document.getElementById("ciudad");
	var paisP = document.getElementById("pais");

//Funciones para validar inputs al escribir:
	var soloLetras = function(e){
		var codigoTecla = e.keyCode;
		console.log(codigoTecla);
		if((codigoTecla >= 97 && codigoTecla <= 122) ||
		   (codigoTecla >= 65 && codigoTecla <= 90) ||
			 (codigoTecla == 32) || (codigoTecla == 39)) {
			return true
		} else {
			return false
		}
	}
	nombreP.onkeypress=soloLetras; // Ejecutando la funcion para cada input.
	apellidoP.onkeypress=soloLetras;
	ciudadP.onkeypress=soloLetras;
	paisP.onkeypress=soloLetras;

	var edadP = document.getElementById("edad");
	edadP.onkeypress=function(e){
		var codigoTecla = e.keyCode;
		console.log(codigoTecla)
		if(codigoTecla >= 48 && codigoTecla <= 57 && this.value.length < 2) { //si valor es max 2 digitos.
			return true
		} else {
			return false
		}
	}

//funcion para validar que inputs no esten vacios:

	var inputs = document.getElementsByClassName('datos');
	var completarDatos = function(e){

		if(this.value.trim().length== 0) {
			this.value ="";
			this.nextElementSibling.nextElementSibling.innerText= "* Este campo es obligatorio.";
		} else {
			this.nextElementSibling.nextElementSibling.innerText= "";
		}

		if(this.getAttribute("type")== "text") { //Si es un input texto: capitalizar.
			var result = "";
			var names = this.value.split(" ");
			for(var i = 0 ; i < names.length ; i++) {
				result += names[i][0].toUpperCase() + names[i].substring(1).toLowerCase() + " ";
			}
			this.value = result;
		}

	}
	for (var i in inputs) { //Ejecutar la funcion completar datos por c/input.
	inputs[i].onblur=completarDatos;
	}
