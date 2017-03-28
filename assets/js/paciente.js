window.onload=function () {

	var nombreS = document.getElementById("nombre-paciente");
	var apellidoS = document.getElementById("apellido-paciente");
	var edadS = document.getElementById("edad-paciente");
	var generoS = document.getElementById("genero-paciente");
	var ciudadS = document.getElementById("ciudad-paciente");
	var paisS = document.getElementById("pais-paciente");
	var objetoPaciente = JSON.parse(localStorage.getItem("paciente"));

	nombreS.innerText= objetoPaciente.nombre;
	apellidoS.innerText= objetoPaciente.apellido;
	edadS.innerText= objetoPaciente.edad;
	generoS.innerText= objetoPaciente.genero;
	ciudadS.innerText= objetoPaciente.ciudad;
	paisS.innerText= objetoPaciente.pais;

	var editar = document.getElementById("edit-button");
	var spans = document.getElementsByTagName('span');
	var contadorClicks = 0;
	editar.addEventListener('click',function(event) {
		contadorClicks++;
		for (var i in spans) {

			if (contadorClicks % 2 != 0) {
				spans[i].contentEditable = true;
				editar.value= "Guardar";
			} else {
				spans[i].contentEditable = false;
				editar.value= "Editar datos";
			}
		}

	});


};
