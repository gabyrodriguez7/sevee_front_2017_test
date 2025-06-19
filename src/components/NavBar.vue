<template>
  <v-app>
    <nav>
      <v-toolbar>
        <v-toolbar-title class="headline text-uppercase">
          <div class="img_logo">
            <v-img alt="Sevee Logo" src="../assets/Sevee_NavBar.svg" transition="scale-transition" contain />
          </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#246CB6" class="hidden-md-and-up" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list class="btnNav">
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2" :to="{ name: 'inicio' }">Inicio</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2 " :to="{ name: 'VotantesNacionales1992' }">Votantes Nacionales
                    1992</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2 " :to="{ name: 'VotantesNacionales2009' }">Votantes Nacionales
                    2009</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2" :to="{ name: 'VotantesExtranjero2009' }">Votantes Extranjero
                    2009</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2 " :to="{ name: 'VotantesNacionales2013' }">Votantes Nacionales
                    2013</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2" :to="{ name: 'VotantesExtranjero2013' }">Votantes Extranjero
                    2013</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2 " :to="{ name: 'VotantesNacionales2017' }">Votantes Nacionales
                    2017</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2" :to="{ name: 'VotantesExtranjero2017' }">Votantes Extranjero
                    2017</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2 " :to="{ name: 'VotantesNacionales' }">Votantes Nacionales 2021</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2" :to="{ name: 'VotantesExtranjero' }">Votantes Extranjero 2021</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link class="link2" :to="{ name: 'AcercaDe' }">Acerca De</router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <!-- Menú para dispositivos grandes -->
        <v-toolbar-items class="hidden-sm-and-down">
          <div class="nav">
            <!-- Opciones del menú -->
            <router-link class="link" :to="{ name: 'inicio' }">Inicio</router-link>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text v-on="on" class="link">Votantes Nacionales</v-btn>
              </template>
              <v-list>
                <v-list-item v-for="item in NacionalItems" :key="item.label" :to="item.route">
                  <router-link class="link" :to="item.route">{{ item.label }}</router-link>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text v-on="on" class="link">Votantes Extranjeros</v-btn>
              </template>
              <v-list>
                <v-list-item v-for="item in ExtanjeroItems" :key="item.label" :to="item.route">
                  <router-link class="link" :to="item.route">{{ item.label }}</router-link>
                </v-list-item>
              </v-list>
            </v-menu>
            <router-link class="link" :to="{ name: 'AcercaDe' }">Acerca De</router-link>
          </div>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      ExtanjeroItems: [
        { label: 'Votantes Extranjero 2009', route: { name: 'VotantesExtranjero2009' } },
        { label: 'Votantes Extranjero 2013', route: { name: 'VotantesExtranjero2013' } },
        { label: 'Votantes Extranjero 2017', route: { name: 'VotantesExtranjero2017' } },
        { label: 'Votantes Extranjero 2021', route: { name: 'VotantesExtranjero' } },
      ],
      NacionalItems: [
        { label: 'Votantes Nacionales 1992', route: { name: 'VotantesNacionales1992' } },
        { label: 'Votantes Nacionales 2009', route: { name: 'VotantesNacionales2009' } },
        { label: 'Votantes Nacionales 2013', route: { name: 'VotantesNacionales2013' } },
        { label: 'Votantes Nacionales 2017', route: { name: 'VotantesNacionales2017' } },
        { label: 'Votantes Nacionales 2021', route: { name: 'VotantesNacionales' } },
        

      ],
    };
  }
};
</script>

<style scoped>
.img_logo {
  width: 50%;
  margin-left: 5%;
  padding: 10px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Oswald';
}

.btnNav {
  width: 100%;
  text-align: center;
}

.op {
  font-family: 'Oswald';
  color: #246CB6
}

.link {
  margin: 30px;
  text-align: center;
  font-weight: 400;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  color: #246CB6;
  text-transform: none;
  letter-spacing: normal;
}

.link2 {
  font-weight: 400;
  padding: 50px;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
}

.router-link-exact-active {
  font-weight: 500;
  color: #F88C0F;
}
</style>
