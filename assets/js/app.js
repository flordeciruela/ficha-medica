
//window.addEventListener('load',function() {
var registrar = document.getElementById('submit');
var pacientes = new Array();

    registrar.addEventListener('click',function() {
          var nombre = document.getElementById('nombre').value;
          var apellido = document.getElementById('apellido').value;
          var edad = document.getElementById('edad').value;
          var genero = document.getElementById('genero').value;
          var ciudad = document.getElementById('ciudad').value;
          var pais = document.getElementById('pais').value;

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
                    datos.innerHTML = "Nombre: "+ this.nombre+ "<br>Edad: " + this.edad+"<br>País: " +this.pais;

                    ficha.appendChild(datos);
                    return ficha;
                    };

  var imprimir = document.getElementById('print');
  print.appendChild(ficha());

}
