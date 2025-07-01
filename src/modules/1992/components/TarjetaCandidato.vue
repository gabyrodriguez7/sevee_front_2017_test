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
            <div v-if="isEnabled('PARTIDO LIBERAL RADICAL ECUATORIANO')">
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
            <div v-if="isEnabled('PARTIDO ASSAD BUCARAM')">
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
            <div v-if="isEnabled('CONCENTRACIÓN DE FUERZAS POPULARES')
            ">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[2].partido" :src="itemsCandidato[2].url"
                    :alt="itemsCandidato[2].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[2].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p3 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div v-if="isEnabled('DEMOCRACIA POPULAR')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[3].partido" :src="itemsCandidato[3].url"
                    :alt="itemsCandidato[3].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[3].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p4 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div v-if="isEnabled('PARTIDO SOCIAL CRISTIANO')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[4].partido" :src="itemsCandidato[4].url"
                    :alt="itemsCandidato[4].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[4].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p5 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div v-if="isEnabled('PARTIDO UNIDAD REPUBLICANA PARTIDO CONSERVADOR ECUATORIANO')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[5].partido" :src="itemsCandidato[5].url"
                    :alt="itemsCandidato[5].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[5].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p6 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div v-if="isEnabled('FRENTE AMPLIO DE IZQUIERDA')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[6].partido" :src="itemsCandidato[6].url"
                    :alt="itemsCandidato[6].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[6].nombre }}
                  </div>
                </div>
              </div>

              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p7 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div v-if="isEnabled('PARTIDO ROLDOSISTA ECUATORIANO')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[7].partido" :src="itemsCandidato[7].url"
                    :alt="itemsCandidato[7].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[7].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p8 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div v-if="isEnabled('IZQUIERDA DEMOCRÁTICA')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[8].partido" :src="itemsCandidato[8].url"
                    :alt="itemsCandidato[8].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[8].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p9 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>

            <div v-if="isEnabled('ACCIÓN POPULAR REVOLUCIONARIA ECUATORIANA')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[9].partido" :src="itemsCandidato[9].url"
                    :alt="itemsCandidato[9].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[9].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p10 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>

            <div v-if="isEnabled('MOVIMIENTO POPULAR DEMOCRÁTICO')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[10].partido" :src="itemsCandidato[10].url"
                    :alt="itemsCandidato[10].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[10].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p11 }"></div>
                    </td>
                    <td class="porcentaje">{{ item.porcentaje }}</td>
                  </tr>
                </tbody>
              </div>
            </div>

            <div v-if="isEnabled('PARTIDO SOCIALISTA ECUATORIANO')">
              <div class="InfoCandidato">
                <div>
                  <img class="img" :key="itemsCandidato[11].partido" :src="itemsCandidato[11].url"
                    :alt="itemsCandidato[11].nombre" />
                  <div class="nombreCandidato">
                    {{ itemsCandidato[11].nombre }}
                  </div>
                </div>
              </div>
              <div class="tablaColores">
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>
                      <!--{{ Colores }}-->
                      <div class="colorPartido" :style="{ background: item.p12 }"></div>
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
    p1: "#FF9999",
    p2: "#FFF5B0",
    p3: "#B0B0B0",
    p4: "#B6E6C7",
    p5: "#FFF5B0",
    p6: "#F5FFB5",
    p7: "#E6AFAF",
    p8: "#F4B0B0",
    p9: "#FFE0B3",
    p10: "#C9D5CF",
    p11: "#FFC2A0",
    p12: "#D88C8C",
  },
  {
    porcentaje: "Porcentaje de votos bajo",
    p1: "#FF4D4D",
    p2: "#FFEB4D",
    p3: "#666666",
    p4: "#66C287",
    p5: "#FFEB4D",
    p6: "#DEFF4A",
    p7: "#D08080",
    p8: "#D24747",
    p9: "#FFB84D",
    p10: "#91A59A",
    p11: "#FF8C4D",
    p12: "#BB4444",
  },
  {
    porcentaje: "Porcentaje de votos medio",
    p1: "#CC0000",
    p2: "#E6C200",
    p3: "#444444",
    p4: "#00995B",
    p5: "#E6C200",
    p6: "#B6E600",
    p7: "#B22222",
    p8: "#990000",
    p9: "#CC8400",
    p10: "#5E7367",
    p11: "#CC3700",
    p12: "#880000",
  },
  {
    porcentaje: "Mayor porcentaje de votos",
    p1: "#FF0000",
    p2: "#FFD700",
    p3: "#000000",
    p4: "#008F4C",
    p5: "#FFD700",
    p6: "#D0FF14",
    p7: "#CD5C5C",
    p8: "#CC0000",
    p9: "#FFA500",
    p10: "#6F917C",
    p11: "#FF4500",
    p12: "#AA0000",
  },
];

const candidato = [
  {
    partido: 1,
    nombre: "BOLIVAR CHIRIBOGA VALDIVIESO",
    url: require("@/modules/1992/assets/Candidatos/150px/1.png"),
    color: "#FF0000",
    nombrePartido: "PARTIDO LIBERAL RADICAL ECUATORIANO",
    json: "1",
  },
  {
    partido: 2,
    nombre: "BOLÍVAR GONZÁLEZ ARGÜELLO",
    url: require("@/modules/1992/assets/Candidatos/150px/2.png"),
    color: "#FFD700",
    nombrePartido: "PARTIDO ASSAD BUCARAM",
    json: "2",
  },
  {
    partido: 3,
    nombre: "AVERROES BUCARAM ZÁCCIDA",
    url: require("@/modules/1992/assets/Candidatos/150px/3.png"),
    color: "#000000",
    nombrePartido: "CONCENTRACIÓN DE FUERZAS POPULARES",
    json: "3",
  },
  {
    partido: 4,
    nombre: "VLADIMIRO ÁLVAREZ GRAU",
    url: require("@/modules/1992/assets/Candidatos/150px/4.png"),
    color: "#008F4C",
    nombrePartido: "DEMOCRACIA POPULAR",
    json: "4",
  },
  {
    partido: 5,
    nombre: "JAIME NEBOT SAADI",
    url: require("@/modules/1992/assets/Candidatos/150px/5.png"),
    color: "#FFD700",
    nombrePartido: "PARTIDO SOCIAL CRISTIANO",
    json: "5",
  },
  {
    partido: 6,
    nombre: "SIXTO DURÁN-BALLÉN CORDOVEZ",
    url: require("@/modules/1992/assets/Candidatos/150px/6.png"),
    color: "#D0FF14",
    nombrePartido: "PARTIDO UNIDAD REPUBLICANA PARTIDO CONSERVADOR ECUATORIANO",
    json: "6",
  },
  {
    partido: 7,
    nombre: "GUSTAVO ITURRALDE NUÑEZ",
    url: require("@/modules/1992/assets/Candidatos/150px/7.png"),
    color: "#CD5C5C",
    nombrePartido: "FRENTE AMPLIO DE IZQUIERDA",
    json: "7",
  },
  {
    partido: 8,
    nombre: "ABDALÁ BUCARAM ORTIZ",
    url: require("@/modules/1992/assets/Candidatos/150px/8.png"),
    color: "#CC0000",
    nombrePartido: "PARTIDO ROLDOSISTA ECUATORIANO",
    json: "8",
  },
    {
    partido: 9,
    nombre: "RAÚL BACA CARBO",
    url: require("@/modules/1992/assets/Candidatos/150px/9.png"),
    color: "#FFA500",
    nombrePartido: "IZQUIERDA DEMOCRÁTICA",
    json: "9",
  },
    {
    partido: 10,
    nombre: "FRANK VARGAS PAZZOS",
    url: require("@/modules/1992/assets/Candidatos/150px/10.png"),
    color: "#6F917C",
    nombrePartido: "ACCIÓN POPULAR REVOLUCIONARIA ECUATORIANA",
    json: "10",
  },
    {
    partido: 11,
    nombre: "FAUSTO MORENO SÁNCHEZ",
    url: require("@/modules/1992/assets/Candidatos/150px/11.png"),
    color: "#FF4500",
    nombrePartido: "MOVIMIENTO POPULAR DEMOCRÁTICO",
    json: "11",
  },
    {
    partido: 12,
    nombre: "LEÓN ROLDÓS AGUILERA",
    url: require("@/modules/1992/assets/Candidatos/150px/12.png"),
    color: "#AA0000",
    nombrePartido: "PARTIDO SOCIALISTA ECUATORIANO",
    json: "12",
  },
];
var partidos = [
  'Resultados Generales',
  "PARTIDO LIBERAL RADICAL ECUATORIANO",
  "PARTIDO ASSAD BUCARAM",
  "CONCENTRACIÓN DE FUERZAS POPULARES",
  "DEMOCRACIA POPULAR",
  "PARTIDO SOCIAL CRISTIANO",
  "PARTIDO UNIDAD REPUBLICANA PARTIDO CONSERVADOR ECUATORIANO",
  "FRENTE AMPLIO DE IZQUIERDA",
  "PARTIDO ROLDOSISTA ECUATORIANO",
  "IZQUIERDA DEMOCRÁTICA",
  "ACCIÓN POPULAR REVOLUCIONARIA ECUATORIANA",
  "MOVIMIENTO POPULAR DEMOCRÁTICO",
  "PARTIDO SOCIALISTA ECUATORIANO",
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