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
    <v-card width="60%" min-height="60%">
      <v-container>
        <v-row>
          <v-col v-for="a in animals" :key="a.id">
            <FlipCard>
              <template slot="front">
                <v-img width="250px" height="250px" :src="a.foto"></v-img>
              </template>
              <template slot="back">
                Nombre: {{a.nombre_animal}}
                Lugar: {{a.direccion}}
                Protectora: {{a.nombre}}
                Sexo: {{a.sexo}}
                Raza: {{a.raza}}
                Contacto: {{a.telefono}}
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
    provinciaSeleccionada: "Burgos"
  }),
  mounted() {
    axios.get("/protectora/all").then(res => (this.animals = res.data));
  },
  components: {
    FlipCard
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
</style>