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
      <span
        v-if="protectora"
        class="link-navbar clickable"
        @click="$router.push({ path: '/new', query: { protectora: userEmail } })"
      >Registrar animales</span>
      <span class="link-navbar clickable" @click="$router.push('/about')">Sobre nosotros</span>
      <v-btn v-if="!token" color="primary" to="/login">Login/Registro</v-btn>
      <span v-if="token" class="font-weight-bold text-uppercase">Identificado como {{ userEmail }}</span>
      <span v-if="token" class="link-navbar clickable" @click="logout">Salir</span>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- Pie de pagina-->
    <v-footer id="footer" app color="primary" dark>
      <div class="footerItems">
        <p>
          <img align="left" class="footerPic" src="./assets/phone32.png" alt="icon phone" />958345678
        </p>
      </div>
      <div class="footerItems">
        <p>
          <img align="left" class="footerPic" src="./assets/mail32.png" alt="icon phone" />mundopet@gmail.com
        </p>
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
    </v-footer>
  </v-app>
</template>

<script>
import jwt from "jwt-decode";
export default {
  name: "App",

  components: {},

  data: () => ({
    token: "",
    protectora: false
  }),

  mounted() {
    this.token = localStorage.getItem("token") || "";
    if (localStorage.getItem("protectora")) this.protectora = true;
  },

  computed: {
    userEmail() {
      return jwt(this.token).email || "";
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.token = "";
    }
  }
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

#footer {
  flex-wrap: nowrap;
}

.footerItems {
  margin-top: 1em;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerPic {
  max-height: 25px;
  max-width: 25px;
}
</style>
