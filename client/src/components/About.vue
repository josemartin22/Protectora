<template>
  <div>
    <!-- Las estiquetas trabajan con estilos.
        Los estilos trabajan de dos formas: o bien aniadiendo todas las caracteristicas a la etiqueta
        o con un archivo css (como vamos a trabajar nosotros)
    -->

    <!-- div = contenedores, para encapsular objetos (imagenes, texto...) para que sea mas facil su posicionamiento-->
    <!-- asi le damos una identificacion/clase a un div (clase = class)-->

    <!-- Este div se escargará de mostrar la imagen de carga de la pagina-->

    <div id="principal">
      <!-- Para poner una imagen se utiliza la etiqueta vacia (etiqueta que se cierra ella misma) img -->
      <img id="cabecera" src="../assets/FotoPrincipal.jpg" alt="cabecera principal" />
    </div>

    <div id="informacionNosotros">
      <div id="infoTexto">
        <h1>QUIENES SOMOS</h1>

        <h4>
          Este proyecto ha sido desarrollado por 5 alumnos de Ingeniería Informtática:
          <br />Victor Cabrita
          <br />Alba Casillas
          <br />Jose Antonio Martín
          <br />Alejandro Menor
          <br />Najib Saadouli
        </h4>
      </div>

      <div id="infoImagen">
        <img id="infoFoto" src="../assets/infoImagen.jpg" alt="foto informativa" />
      </div>
    </div>

    <div id="miniInfoEmpresa">
      <h3 id="miniNuestraEmpresa">Nuestra empresa _____</h3>
    </div>

    <div id="informacionEmpresa">
      <div id="mision">
        <h2>NUESTRA MISION</h2>

        <h5
          class="hempresa"
        >Ofrecer una conexión entre las distintas protectoras del país para facilitar a quienes quieran adoptar a un animal.</h5>
      </div>

      <div id="vision">
        <h2>NUESTRA VISION</h2>

        <h5
          class="hempresa"
        >Garantizar un hogar lleno de felicidad y amor para todos los perros y gatos abandonados.</h5>
      </div>

      <div id="estrategia">
        <h2>NUESTRAS ESTRATEGIAS</h2>

        <h5
          class="hempresa"
        >Nos basamos en mantener un contacto fácil y directo tanto con los clientes como con las protectoras de manera que se puedan garantizar adopciones dinamicas y sencillas.</h5>
      </div>
    </div>

    <div id="infoContacto">
      <div id="contactoTitulo">
        <h1>CONTACTA CON NOSOTROS</h1>

        <h4
          class="hempresa"
        >Si tiene alguna queja o pregunta, entonces no dude en contactar con nosotros.</h4>

        <div id="telefono">
          <figure>
            <img id="iconPhone" src="../assets/phone32.png" alt="icon phone" />
            <figcaption class="iconInfo">958345678</figcaption>
          </figure>
        </div>

        <div id="email">
          <figure>
            <img id="iconMail" src="../assets/mail32.png" alt="icon email" />
            <figcaption class="iconInfo">demo@example.com</figcaption>
          </figure>
        </div>
      </div>

      <div id="formulario">
        <!-- La etiqueta form sirve para encapsular los elementos de un formulario-->
        <form action method="get">
          <!-- Los input son cuadros a los que puedes asignarles valores o usarlos para recogida de datos-->
          <input type="text" id="inpNombre" class="campo" placeholder="NOMBRE" required />
          <br />
          <!-- la indicación required hace que que el campo sea obligatorio para proceder a enviar el formulario-->
          <input type="email" id="inpMail" class="campo" placeholder="EMAIL" required />
          <br />

          <input type="text" id="inpAsunto" class="campo" placeholder="ASUNTO" required />
          <br />

          <textarea
            class="campo"
            id="texMensaje"
            rows="5"
            cols="40"
            placeholder="MENSAJE..."
            required
          ></textarea>
          <br />

          <!-- tipo submit : lo convierte en un boton -->
          <input type="submit" class="botonAzul" value="Enviar" />
        </form>
      </div>
    </div>

    <!-- Pie de pagina-->
    <footer id="footer">
      <span>
        <input type="text" class="botonFooter" value="Sobre Nosotros" />
      </span>
      <span>
        <input type="text" class="botonFooter" value="Equipo" />
      </span>
      <span>
        <input type="text" class="botonFooter" value="Contacto" />
      </span>
      <span>
        <input type="text" class="botonFooter" value="Políticas de Privacidad" />
      </span>
    </footer>
  </div>
</template>

<style>
.home-header {
  text-align: start;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  padding: 15em;
  background-image: url("https://images.unsplash.com/photo-1496522650602-5988dce09660?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  color: white;
}

div {
  display: block;
}

/*
###############################
ESTILOS PARA EL APARTADO INICIO
###############################
*/

#loadimg {
  margin-top: 30%;
  width: 80px;
  height: 80px;
}

#principal {
  width: 100%;
  /*hace que el elementro sea un bloque*/
  text-align: center;
  margin-bottom: 10%;
}

#cabecera {
  /* Para que el ancho se adapte al 100% de la pagina*/
  /*atributo:valor;*/
  width: 70%;
}

/*
#################################
ESTILOS PARA EL APARTADO NOSOTROS
#################################
*/

#informacionNosotros {
  width: 100%;
  display: inline-block;
  /*text-align: center; para centrarlo en la pagina*/
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
}

#infoTexto {
  width: 40%;
  height: 100%;
  float: left;
}

#infoTexto h4 {
  color: gray;
}

#infoImagen {
  width: 50%;
  height: 50%;
  float: left;
}

#infoFoto {
  width: 70%;
  height: 70%;
}

/*
################################
ESTILOS PARA EL APARTADO EMPRESA
################################
*/

#miniInfoEmpresa {
  margin-left: 5%;
  color: #676cfb;
  line-height: 0.5em;
}

#informacionEmpresa {
  width: 100%;
  overflow: hidden;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
}

/*Para los div dentro de informacion empresa (vision, mision y estrategias)*/

#informacionEmpresa div {
  width: 30%;
  height: 100%;
  float: left;
}

/* 
Si haces un cambio aqui, aunque arriba ya tenga unas caracteristicas asociadas (#informacionEMpresa div)
se cambia

#vision {
    width: 30%;
    height: 100%;
    float: left;
}

#mision {
    width: 30%;
    height: 100%;
    float: left;
}

#estrategia {
    width: 30%;
    height: 100%;
    float: left;
}*/

/* hempresa = headers de la empresa */

.hempresa {
  text-align: justify;
  margin: 10px;
  color: gray;
}

/*
#################################
ESTILOS PARA EL APARTADO CONTACTO
#################################
*/

#infoContacto {
  width: 100%;
  overflow: hidden;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
}

#contactoTitulo {
  width: 40%;
}

#telefono,
#email {
  float: left;
  margin: 1%;
  margin-left: 5%;
}

#iconPhone {
  box-shadow: 3px 3px 5px 5px #676cfb;
  border-radius: 10px 10px 10px 10px;
  margin-left: 5%;
}

#iconMail {
  box-shadow: 3px 3px 5px 5px #676cfb;
  border-radius: 10px 10px 10px 10px;
  margin-left: 10%;
}

.iconInfo {
  text-align: left;
  margin: 2%;
  color: gray;
}

#formulario {
  width: 400px;
  padding: 35px;
  border: 1px solid #676cfb;
  margin-left: 10%;
  float: left;
}

form {
  border-radius: 3px;
  color: #999;
  font-size: 2.4em;
  width: 100%;
}

input,
textarea {
  border: 0;
  outline: none;
}

.campo {
  border-bottom: solid 1px #ccc;
  width: 90%;
  padding: 20px;
}

/*focus sirve para indicar qué ocurrirá cuando se hace click al recuadro
En este caso el borde se pondrá de un color*/

.campo:focus {
  border-color: #676cfb;
}

.botonAzul {
  border-radius: 50px;
  border: 2px solid #676cfb;
  background: transparent;
  padding: 5px;
  width: 100px;
  margin-top: 20px;
  color: gray;
}

.botonAzul:hover {
  background: #676cfb;
  color: white;
  cursor: pointer;
}

/*
###############################
ESTILOS PARA EL APARTADO FOOTER
###############################
*/

#footer {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #676cfb;
  color: white;
  text-align: center;
}

#footer span {
  text-align: center;
  display: inline-block;
  margin-left: 5%;
  padding: 10px;
}

.botonFooter {
  color: white;
  background: transparent;
}
</style>