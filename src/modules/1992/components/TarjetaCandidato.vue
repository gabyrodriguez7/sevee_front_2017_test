<template>
  <div>
    <!--Tarjeta Desplegable-->
    <v-select v-model="enabled" :items="slots" color="#FFF" class="elevation-6 partido" label="Partido Político"
      clearable></v-select>

    <v-data-table :items="itemsArray" hide-default-footer item-key="id" class="TarjetaColores">
      <template v-slot:body="{ items }">
        <v-layout column style="height: 400px">
          <v-flex style="overflow: auto">
            <div v-if="isEnabled('Resultados Generales')">
              <div class="tablaGeneral1">
                <tbody>
                  <tr v-for="item in itemsCandidato" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartidoNombre" :style="{ background: item.color }"></div>
                    </td>
                    <td>
                      <div class="espacioPartidoNombre">
                        {{ item.nombrePartido }}
                      </div>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div v-if="isEnabled('PARTIDO 1')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[0].partido" :src="itemsCandidato[0].url"
                    :alt="itemsCandidato[0].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[0].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p1 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div v-if="isEnabled('PARTIDO 2')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[1].partido" :src="itemsCandidato[1].url"
                    :alt="itemsCandidato[1].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[1].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p2 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>
           



          </v-flex>
        </v-layout>
      </template>
    </v-data-table>
  </div>
</template>

<script>
const desserts = [
  /*{porcentaje: '0% - 25%', p1: '#bdd7e7', p2: '#fdbe85', p3: '#cbaada', p4: '#fcdabc', p5: '#B1E1E7', p6: '#f8bbd0', p7: '#F5B7B1', p8: '#bdbdbd', p9: '#A4DFBF', p10: '#c7b69f', p11: '#f9e79f', p12: '#b4e4f9',p13: '#ffc9c2', p14: '#fcf099', p15: '#cbe5f6', p16: '#DFA4CB'},
    {porcentaje: '26% - 50%', p1: '#6baed6', p2: '#fd8d3c', p3: '#A569BD', p4: '#f8c89c', p5: '#64C3CE', p6: '#f48fb1', p7: '#F1948A', p8: '#8c8c8c', p9: '#7DCEA0', p10: '#907761', p11: '#F4D03F', p12: '#54C3F2', p13: '#fb887d', p14: '#f3d367', p15: '#85c1e9', p16: '#CF77B0'},
    {porcentaje: '51% - 75%', p1: '#3182bd', p2: '#e6550d', p3: '#8E44AD', p4: '#f2b77c', p5: '#40b6c4', p6: '#f06292', p7: '#EC7063', p8: '#5f5f5f', p9: '#52BE80', p10: '#7e634e',p11: '#F1C40F', p12: '#27B4EF', p13: '#ef7e73', p14: '#c29b2b', p15: '#5dade2', p16: '#c5599f'},
    {porcentaje: '76% - 100%', p1: '#08519c', p2: '#a63603', p3: '#7D3C98', p4: '#e69237', p5: '#35A0AC', p6: '#e91e63', p7: '#E74C3C', p8: '#4a4a4a', p9: '#229954', p10: '#553d2a', p11: '#D4AC0D', p12: '#1097D1', p13: '#e37469', p14: '#8f6e0f', p15: '#3498db', p16: '#b5408c'}
    */
  {
    porcentaje: "Menor porcentaje de votos",
    p1: "#FF9191",
    p2: "#FFA9EA",
    p3: "#FFC782",
    p4: "#7EFF90",
    p5: "#BFBFA6",
    p6: "#7AF5E2",
    p7: "#F9FC74",
    p8: "#92A061",
  },
  {
    porcentaje: "Porcentaje de votos bajo",
    p1: "#FF6060",
    p2: "#F77FDA",
    p3: "#FFB252",
    p4: "#26FF44",
    p5: "#C1C186",
    p6: "#4FE8D0",
    p7: "#E5E862",
    p8: "#869B3E",
  },
  {
    porcentaje: "Porcentaje de votos medio",
    p1: "#FF3535",
    p2: "#F15FCD",
    p3: "#FFA12C",
    p4: "#00EA20",
    p5: "#ABAB01",
    p6: "#24DCBE",
    p7: "#D4D72C",
    p8: "#687E1B",
  },
  {
    porcentaje: "Mayor porcentaje de votos",
    p1: "#FF0000",
    p2: "#DF3CB7",
    p3: "#FF8C00",
    p4: "#02C01C",
    p5: "#e4ff00",
    p6: "#03CEAD",
    p7: "#CACE03",
    p8: "#455709",
  },
];

const candidato = [
  {
    partido: 1,
    nombre: "Candidato 1",
    url: require("@/modules/2009/assets/Candidatos/150px/1.png"),
    color: "#FF0000",
    nombrePartido: "PARTIDO 1",
    json: "1",
  },
  {
    partido: 2,
    nombre: "Candidato 2",
    url: require("@/modules/2009/assets/Candidatos/150px/2.png"),
    color: "#DF3CB7",
    nombrePartido: "PARTIDO 2",
    json: "2",
  },
  
];
var partidos = [
  'Resultados Generales',
  "PARTIDO 1",
  "PARTIDO 2"
];
export default {
  name: "TarjetaCandidato1992",
  props: { etiquetaTarjeta2: String },
  data: () => ({
    enabled: "Resultados Generales",
    itemsArray: desserts,
    itemsCandidato: candidato,
    scrollInvoked: 0,
    slots: partidos,
  }),

  methods: {
    buscarJson(slot) {
      /*for(let i=0; i<candidato.length; i++){
                
                if(slot==this.itemsCandidato[i].nombrePartido ){
                    console.log("1 "+this.itemsCandidato[i].json );
                    return this.itemsCandidato[i].json;                  
                }else{
                    console.log("2");
                    return'Ec';
                }
               
            }*/

      let resultado = this.itemsCandidato.find(
        (cand) => cand.nombrePartido === slot
      );
      if (resultado == null) {
        resultado = "Ec";
        console.log(" Objeto2" + resultado);
        return [];
      } else {
        console.log(" Objeto" + resultado.json);
        return resultado.json;
      }
    },
    isEnabled(slot) {
      //console.log("------------------------Label emit"+this.enabled + this.etiquetaTarjeta)
      let aux = "";
      if (this.etiquetaTarjeta2 != "") {
        this.enabled = this.etiquetaTarjeta2;
        aux = this.enabled === slot;
      } else {
        aux = this.enabled === slot;
        if (aux) {
          this.$emit("tarjetaV1", [
            "1raVuelta",
            this.buscarJson(this.enabled),
            "",
            "",
          ]);
        }
        console.log("json: " + this.buscarJson(this.enabled));
      }
      return aux;
    },
    tarjetaPrimeraVuelta() { },
    foto() {
      this.val = this.val + 1;
      return this.val;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Oswald&display=swap");

.color {
  padding: 0%;
  padding-left: 1%;
  padding-right: 10px;
}

.partido {
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #12a2c2;
  width: 100%;
  border-radius: 4px;
}

.colorPartido {
  width: 20px;
  height: 20px;
  margin-right: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.re {
  width: 100%;
}

.TarjetaColores {
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  border-radius: 4px;
}

.tablaGeneral1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Oswald", sans-serif;
  font-size: 15px;
}

.tablaColores {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Oswald", sans-serif;
  font-size: 15px;
}

.InfoCandidato {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  margin-top: 5%;
  margin-bottom: 20px;
}

.img {
  width: 125px;
  height: 125px;
}

.nombreCandidato {
  text-align: center;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
}

.porcentaje {
  margin-bottom: 10px;
}

.espacioPartidoNombre {
  margin-right: 25px;
  margin-top: 10px;
}

.colorPartidoNombre {
  width: 20px;
  height: 20px;
  margin-right: 50px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>