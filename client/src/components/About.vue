<template>
  <div>
    <div id="header">
      <v-img
        max-width="768px"
        max-height="432px"
        src="../assets/FotoPrincipal.jpg"
        alt="cabecera principal"
      />
    </div>

    <div id="whoWeAre">
      <v-card>
        <v-card-text>
          <h1>
            <p>QUIENES SOMOS</p>
          </h1>
        </v-card-text>
        <v-card-text>
          <h4>
            <p>
              Este proyecto ha sido desarrollado por 5 alumnos de Ingeniería Informática:
              <br />Victor Cabrita
              <br />Alba Casillas
              <br />Jose Antonio Martín
              <br />Alejandro Menor
              <br />Najib Saadouli
            </p>
          </h4>
        </v-card-text>
      </v-card>
      <div>
        <v-img max-width="850px" src="../assets/infoImagen.jpg" alt="foto informativa" />
      </div>
    </div>

    <div id="infoEmpresa">
      <v-card>
        <v-card-text>
          <h1>
            <p>NUESTRA MISION</p>
          </h1>
        </v-card-text>
        <v-card-text>
          <p>Ofrecer una conexión entre las distintas protectoras del país para facilitar a quienes quieran adoptar a un animal.</p>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-text>
          <h1>
            <p>NUESTRA VISION</p>
          </h1>
        </v-card-text>
        <v-card-text>
          <p>Garantizar un hogar lleno de felicidad y amor para todos los perros y gatos abandonados.</p>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-text>
          <h1>
            <p>NUESTRA ESTRATEGIA</p>
          </h1>
        </v-card-text>
        <v-card-text>
          <p>Nos basamos en mantener un contacto fácil y directo tanto con los clientes como con las protectoras de manera que se puedan garantizar adopciones dinamicas y sencillas.</p>
        </v-card-text>
      </v-card>
    </div>

    <h1 align="center">PROTECTORAS COLABORADORAS</h1>
    <v-container margin-bottom="70px">
      <v-row>
        <v-col v-for="p in protectoras" :key="p.id">
          <v-card max-width="500px" max-height="500px">
            <v-card-text>
              <h1>
                <span class="text-capitalize"><p>{{p.nombre}}</p></span>
              </h1>
            </v-card-text>
            <v-card-text>
              <span class="text-capitalize"><h2><p>{{p.direccion}}</p></h2></span>
            </v-card-text>
            <v-card-text>
              <h3><p>{{p.email}}</p></h3>
            </v-card-text>
            <v-card-text>
              <h3><p>{{p.telefono}}</p></h3>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <h1 align="center">CONTÁCTANOS</h1>
    <div id="formulario">
      <!-- La etiqueta form sirve para encapsular los elementos de un formulario-->
      <form action method="get">
        <!-- Los input son cuadros a los que puedes asignarles valores o usarlos para recogida de datos-->
        <input class="input" type="text"  placeholder="NOMBRE" required />
        <br />
        <!-- la indicación required hace que que el campo sea obligatorio para proceder a enviar el formulario-->
        <input class="input" type="email" placeholder="EMAIL" required />
        <br />
        <input class="input" type="text" placeholder="ASUNTO" required />
        <br />
        <textarea rows="5" cols="40" placeholder="MENSAJE..." required></textarea>
        <br />
        <!-- tipo submit : lo convierte en un boton -->
        <input type="submit" class="botonAzul" value="Enviar" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    protectoras: []
  }),
  mounted() {
    axios.get("/protectora/allProtectoras").then(res => (this.protectoras = res.data));
  }
};
</script>

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

#header {
  justify-content: center;
  display: flex;
  margin-bottom: 70px;
}

#whoWeAre {
  flex-direction: row;
  display: flex;
  margin: 1em;
  justify-content: center;
  margin-bottom: 70px;
}

#whoWeAre .v-card {
  margin-right: 1em;
  width: 50%;
}

#infoEmpresa {
  flex-direction: row;
  display: flex;
  margin-bottom: 70px;
}

#infoEmpresa .v-card {
  margin: 1em;
  width: 100%;
}

p {
  text-align: center;
}

.container{
  margin-bottom: 70px;
}

.input {
  border-bottom: solid 1px #ccc;
  width: 90%;
  padding: 20px;
  outline: none;
}

.input:focus {
  border-color: #676cfb;
}

#formulario {
  width: 50%;
  padding: 35px;
  border: 1px solid #676cfb;
  float: left;
  margin: 2em;
  margin-left: 25%;
  position: center;
}

form {
  border-radius: 3px;
  color: #999;
  font-size: 2.4em;
  width: 100%;
}

textarea {
  outline: none;
  text-align: justify;
  padding: 20px;
}


.botonAzul {
  border-radius: 50px;
  border: 2px solid #676cfb;
  background: transparent;
  padding: 5px;
  width: 150px;
  margin-top: 20px;
  color: gray;
}

.botonAzul:hover {
  background: #676cfb;
  color: white;
  cursor: pointer;
}
</style>