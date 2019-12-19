<template>
  <div>
    <div id="header">
      <v-img max-width="768px" max-height="432px" src="../assets/FotoPrincipal.jpg" alt="cabecera principal" />
    </div>

    <div id="whoWeAre">
      <v-card>
        <v-card-text><h1><p>QUIENES SOMOS</p></h1></v-card-text>
        <v-card-text><h4><p>Este proyecto ha sido desarrollado por 5 alumnos de Ingeniería Informática:
          <br />Victor Cabrita
          <br />Alba Casillas
          <br />Jose Antonio Martín
          <br />Alejandro Menor
          <br />Najib Saadouli</p></h4></v-card-text>
      </v-card>
      <div>
        <v-img max-width="850px" src="../assets/infoImagen.jpg" alt="foto informativa" />
      </div>
    </div>

    <div id="infoEmpresa">
      <v-card>
        <v-card-text><h1><p>NUESTRA MISION</p></h1></v-card-text>
        <v-card-text><p>Ofrecer una conexión entre las distintas protectoras del país para facilitar a quienes quieran adoptar a un animal.</p></v-card-text>
      </v-card>
      <v-card>
        <v-card-text><h1><p>NUESTRA VISION</p></h1></v-card-text>
        <v-card-text><p>Garantizar un hogar lleno de felicidad y amor para todos los perros y gatos abandonados.</p></v-card-text>
      </v-card>
      <v-card>
        <v-card-text><h1><p>NUESTRA ESTRATEGIA</p></h1></v-card-text>
        <v-card-text><p>Nos basamos en mantener un contacto fácil y directo tanto con los clientes como con las protectoras de manera que se puedan garantizar adopciones dinamicas y sencillas.</p></v-card-text>
      </v-card>
    </div>

    <div id="infoContacto">
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
    <footer>
        <div class="footerItems">
          <p>
            <img align="left" class="footerPic" src="../assets/phone32.png" alt="icon phone">958345678
          </p>
        </div>
        <div class="footerItems">
          <p>
            <img align="left" class="footerPic" src="../assets/mail32.png" alt="icon phone">demo@example.com
          </p>
        </div>
        <div class="footerItems">
          <p>Sobre Nosotros</p>
        </div>
        <div class="footerItems">
          <p>Equipo</p>
        </div>
        <div class="footerItems">
          <p>Contacto</p>
        </div>
        <div class="footerItems">
          <p>Políticas de Privacidad</p>
        </div>
    </footer>
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
  color: white;
}

div {
  display: block;
}

#header{
  justify-content: center;
  display: flex;
  margin-bottom: 70px;
}

#whoWeAre{
  flex-direction: row;
  display: flex;
  margin:1em;
  justify-content: center;
  margin-bottom: 70px;
  
}

#whoWeAre .v-card{
  margin-right:1em;
  width:50%;
}


#infoEmpresa{
  flex-direction: row;
  display: flex;
  
}

#infoEmpresa .v-card{
  margin:1em;
  width:100%;
}

p{
  text-align: center;
}

footer {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #676cfb;
  color: white;
  text-align: center;
  flex-direction: row;
  align-items:center;
  display: flex;
  justify-content: center;
}

.footerItems{
  margin-top:1em;
  width:100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerPic{
  max-height:25px;
  max-width:25px;
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


</style>