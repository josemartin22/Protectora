<template>
  <div class="centered">
    <div class="home-header">
      <div>
        <h1>¡QUÉ MONOS!</h1>
        <h2>Descubre a tu nueva mascota</h2>
      </div>
      <div>
        <h2>Selecciona tu provincia</h2>
        <v-select dark solo :items="provincias" v-model="provinciaSeleccionada"></v-select>
      </div>
    </div>
    <v-card width="60%" min-height="60%" line-heigth="0px">
      <v-container>
        <v-row>
          <v-col v-for="a in animals" :key="a.id_animal" id="fCard">
            <FlipCard>
              <template slot="front">
                <v-img width="250px" height="250px" :src="a.foto"></v-img>
              </template>
              <template slot="back">
                Nombre: {{a.nombre_animal}}<br/>
                Lugar: {{a.direccion}}<br/>
                Protectora: {{a.nombre}}<br/>
                Sexo: {{a.sexo}}<br/>
                Raza: {{a.raza}}<br/>
                Contacto: {{a.telefono}}<br/>
                <div v-if="protectora && userEmail == a.email">
                  <span>Este animal es de tu protectora</span>
                  <v-btn @click="deleteAnimal(a.id_animal)">Dar de baja</v-btn>
                </div>
                <div v-if="!protectora">
                  <span>Adopta este animal</span>
                  <v-btn @click="adopta(a.id_animal)">Adopta</v-btn>
                </div>
              </template>
            </FlipCard>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import FlipCard from "./FlipCard";
import axios from "axios";
import jwt from "jwt-decode";
export default {
  data: () => ({
    animals: [],
    provincias: [
      "Alava",
      "Albacete",
      "Alicante",
      "Almería",
      "Asturias",
      "Avila",
      "Badajoz",
      "Barcelona",
      "Burgos",
      "Cáceres",
      "Cádiz",
      "Cantabria",
      "Castellón",
      "Ciudad Real",
      "Córdoba",
      "La Coruña",
      "Cuenca",
      "Gerona",
      "Granada",
      "Guadalajara",
      "Guipúzcoa",
      "Huelva",
      "Huesca",
      "Islas Baleares",
      "Jaén",
      "León",
      "Lérida",
      "Lugo",
      "Madrid",
      "Málaga",
      "Murcia",
      "Navarra",
      "Orense",
      "Palencia",
      "Las Palmas",
      "Pontevedra",
      "La Rioja",
      "Salamanca",
      "Segovia",
      "Sevilla",
      "Soria",
      "Tarragona",
      "Santa Cruz de Tenerife",
      "Teruel",
      "Toledo",
      "Valencia",
      "Valladolid",
      "Vizcaya",
      "Zamora",
      "Zaragoza"
    ],
    provinciaSeleccionada: "Burgos",
    token: "",
    protectora: false
  }),
  mounted() {
    this.token = localStorage.getItem("token") || "";
    if (localStorage.getItem("protectora")) this.protectora = true;
    this.getAnimals();
  },
  components: {
    FlipCard
  },
  computed: {
    userEmail() {
      return jwt(this.token).email || "";
    }
  },
  methods: {
    getAnimals() {
      axios.get("/protectora/all").then(res => (this.animals = res.data));
    },
    deleteAnimal(id) {
      axios
        .delete(`/protectora/delete/${id}`, {
          headers: {
            Authorization: this.token
          }
        })
        .then(() => {
          this.getAnimals();
        })
        .catch(err => alert(err, "No se pudo dar de baja el animal"));
    },
    adopta(id) {
      if (!this.token) {
        alert("Tienes que registrarte o logearte para adoptar");
        return;
      }

      const config = {
        method: "POST",
        url: `/protectora/adopta/${id}`,
        headers: {
          Authorization: this.token
        }
      };

      axios(config)
        .then(() =>
          alert("La adopción ha quedado registrada y la protectora notificada")
        )
        .catch(() => alert("No se ha podido adoptar al animal"));
    }
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
  background-image: url("https://images.unsplash.com/photo-1496522650602-5988dce09660?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  color: white;
}

#fCard {
  max-width: 250px;
  max-height: 250px;
  display: flex;
  margin: 1em;
}
</style>