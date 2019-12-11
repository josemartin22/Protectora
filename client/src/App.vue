<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img
        max-width="50px"
        max-height="50px"
        src="./assets/cat.svg"
        class="clickable"
        @click="$router.push('/')"
      ></v-img>
      <v-toolbar-title
        @click="$router.push('/')"
        class="display-1 font-weight-light text-uppercase clickable"
      >mundopet</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="link-navbar clickable" @click="$router.push('/about')">Sobre nosotros</span>
      <v-btn color="primary" to="/login">Login/Registro</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>

<style>
.clickable:hover {
  display: block;
  cursor: pointer;
}
.link-navbar {
  margin-right: 1em;
  margin-left: 1em;
}
</style>
