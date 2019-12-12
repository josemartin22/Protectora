<template>
  <div class="centered">
    <v-card min-height="50%" width="40%">
      <div class="centered">
        <v-card-title class="text-uppercase">{{
          register ? "Sign Up" : "Login"
        }}</v-card-title>
        <div>
          <v-text-field
            prepend-icon="mdi-email"
            label="Email"
            outlined
            v-model="email"
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-lock"
            label="Contaseña"
            outlined
            type="password"
            v-model="password"
          ></v-text-field>
          <div v-if="register">
            <v-text-field
              prepend-icon="mdi-rename-box"
              outlined
              label="Nombre"
              v-model="name"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-account"
              outlined
              label="DNI"
              v-model="dni"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-map-marker"
              outlined
              label="Dirección"
              v-model="address"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-phone"
              outlined
              label="Teléfono"
              v-model="phone"
            ></v-text-field>
          </div>
          <v-btn color="primary" @click="submit">{{
            register ? "Registrarte" : "Entrar"
          }}</v-btn>
          <v-switch label="Protectora" v-model="protectora"></v-switch>
          <v-switch label="Registrarte/Logearte" v-model="register"></v-switch>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    register: false,
    protectora: false,
    email: "",
    password: "",
    dni: "",
    phone: "",
    address: "",
    name: ""
  }),
  methods: {
    submit() {
      const { register, protectora } = this;
      if (!register && !protectora) this.loginUser();
      /*
      else if (!register && protectora) this.loginProtectora();
      */ else if (
        register &&
        !protectora
      )
        this.registerUser();
      /*
      else this.registerProtectora();
      */
    },
    loginUser() {
      const { email, password } = this;
      if (email && password) {
        axios.post("/auth/login/user", { email, password }).then(res => {
          localStorage.setItem("token", res.data.token);
          this.redirectHome();
        });
      }
    },
    registerUser() {
      const { email, password, dni, phone, address, name } = this;
      if (email && password && dni && phone && address && name) {
        axios
          .post("/auth/register/user", {
            email,
            password,
            phone,
            dni,
            address,
            name
          })
          .then(() => {
            alert(
              "Registro correcto! Puedes utilizar tu email y contraseña para logearte"
            );
          })
          /* eslint-disable no-console */
          .catch(console.log);
      }
    },
    redirectHome() {
      this.$router.push("/", () => location.reload());
    }
  },
  mounted() {
    if (localStorage.getItem("token")) this.redirectHome();
  }
};
</script>

<style>
.centered {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
