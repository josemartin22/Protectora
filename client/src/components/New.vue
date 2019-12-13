<template>
  <div class="centered">
    <v-card width="40%" height="90%">
      <div class="centered">
        <v-img v-if="type=='GATO'" src="../assets/cat.svg" max-width="100px" max-height="100px"></v-img>
        <v-img v-else src="../assets/dog.svg" max-width="100px" max-height="100px"></v-img>
        <div>
          <v-select solo v-model="type" :items="['GATO', 'PERRO']"></v-select>
          <v-text-field outlined label="Nombre" v-model="name"></v-text-field>
          <v-text-field outlined label="Edad" v-model="age"></v-text-field>
          <v-select solo v-model="gender" :items="['MACHO', 'HEMBRA']"></v-select>
          <v-text-field outlined label="Raza" v-model="race"></v-text-field>
          <v-select solo v-model="size" :items="['TOYS', 'PEQUEÑOS', 'MEDIANOS', 'GRANDES']"></v-select>
          <v-text-field outlined label="Foto" v-model="picture"></v-text-field>
        </div>
        <v-btn color="primary" @click="submit">Publicar</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: "",
    type: "GATO",
    gender: "MACHO",
    race: "",
    size: "PEQUEÑOS",
    age: "",
    picture: ""
  }),
  methods: {
    submit() {
      const { name, type, gender, race, size, age, picture } = this;

      const protectora = this.$route.query.protectora;

      axios
        .post("/protectora/new", {
          name,
          type,
          gender,
          race,
          size,
          age,
          picture,
          protectora
        })
        .then(() => alert("Publicación correcta!"))
        .catch(() => alert("No hemos podido publicar el animal"));
    }
  }
};
</script>