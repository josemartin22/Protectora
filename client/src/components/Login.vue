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
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-lock"
            label="Contaseña"
            outlined
            type="password"
          ></v-text-field>
          <v-btn color="primary">{{
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
export default {
  data: () => ({
    register: false
  })
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
