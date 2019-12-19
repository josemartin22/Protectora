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

    <v-card width="60%" min-height="60%" line-heigth="0px">
      <h1>PROTECTORAS COLABORADORAS</h1>
      <v-container>
        <v-row>
          <v-col v-for="p in protectoras" :key="p.id">
            <v-card>
              <v-card-text>
                <h1>
                  <p>{{p.nombre}}</p>
                </h1>
              </v-card-text>
              <v-card-text>
                <p>{{p.direccion}}</p>
              </v-card-text>
              <v-card-text>
                <h1>
                  <p>{{p.email}}</p>
                </h1>
              </v-card-text>
              <v-card-text>
                <h1>
                  <p>{{p.telefono}}</p>
                </h1>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

      <div id="formulario">
        <!-- La etiqueta form sirve para encapsular los elementos de un formulario-->
        <form action method="get">
          <!-- Los input son cuadros a los que puedes asignarles valores o usarlos para recogida de datos-->
          <input type="text"  placeholder="NOMBRE" required />
          <br />
          <!-- la indicación required hace que que el campo sea obligatorio para proceder a enviar el formulario-->
          <input type="email" placeholder="EMAIL" required />
          <br />

          <input type="text" placeholder="ASUNTO" required />
          <br />

          <textarea
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
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    protectoras: []
  }),
  mounted() {
    axios.get("/protectora/all").then(res => (this.protectoras = res.data));
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

input {
  border-bottom: solid 1px #ccc;
  width: 90%;
  padding: 20px;
  outline: none;
}

input:focus {
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

input {
  border-bottom: solid 1px #ccc;
  width: 90%;
  padding: 20px;
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