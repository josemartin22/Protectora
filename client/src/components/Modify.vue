<template>
  <div class="centered">
    <v-card width="40%" height="90%">
      <div class="centered">
        <div>
          <v-text-field outlined label="Nombre" v-model="name"></v-text-field>
          <v-text-field outlined label="Edad" v-model="age"></v-text-field>
          <v-text-field outlined label="Raza" v-model="race"></v-text-field>
          <v-select solo v-model="size" :items="['TOYS', 'PEQUEÑOS', 'MEDIANOS', 'GRANDES']"></v-select>
          <v-text-field outlined label="Foto" v-model="picture"></v-text-field>
        </div>
        <v-btn color="primary" @click="submit">Modificar</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: "",
    race: "",
    size: "PEQUEÑOS",
    age: "",
    picture: ""
  }),
  methods: {
    submit() {
      const body = {
        nombre: this.name,
        raza: this.race,
        tamanio: this.size,
        edad: this.age,
        foto: this.picture
      };

      const token = localStorage.getItem("token");
      const id = this.$route.query.id;

      axios({
        method: "post",
        url: `protectora/modify/${id}`,
        data: body,
        headers: {
          Authorization: token
        }
      })
        .then(() => this.$router.push("/"))
        .catch(() =>
          alert("No se ha podido modificar el animal, inténtalo otra vez")
        );
    }
  },
  mounted() {
    this.name = this.$route.query.name;
    this.race = this.$route.query.race;
    this.size = this.$route.query.size;
    this.age = this.$route.query.age;
    this.picture = this.$route.query.picture;
  }
};
</script>