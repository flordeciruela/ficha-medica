
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
