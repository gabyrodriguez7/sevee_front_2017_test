<template>
  <v-row justify="space-around">
    <!--Etiqueta Titulo Mapas-->
    <div style="margin-top: 20px">
      <v-row class="justify-center titulo_label">
        <v-card elevation="25">
          <v-card-text class="map_titulo">
            <div class="d-flex justify-center white--text">
              GRÁFICOS DE RESULTADOS
            </div>
          </v-card-text>
        </v-card>
      </v-row>
    </div>

    <div class="color" style="
        overflow-x: auto;
        width: 100%;
        position: absolute;
        left: 0px;
        top: -35px;
      ">
      <div style="margin-left: 100px; ">
        <div v-for="(data, index) in chartData" :key="index" style="margin-top: 153px; white-space: nowrap;  ">
          <div>
            <div v-for="(value, dataIndex) in data.values" :key="dataIndex" style="
                display: inline-block;
                margin-right: 20px;
                position: relative;       
              ">
              <div :style="`background-color: ${value.color}; height: ${value.height * 7
                }px; width: 60px; margin-left: 110px; box-shadow: 8px 2px 8px rgba(0, 0, 0, 0.5);`"></div>
              <img :src="value.bar_image" style="
                  width: 70px;
                  height: 70px;
                  margin-right: 5px;
                  position: absolute;
                  top: -80px;
                  left: 0;
                  margin-left: 105px;
                " />
              <div style="
                  display: flex;
                  align-items: center;
                  margin-right: 60px;
                  margin-top: 10px;
                ">
                <img :src="value.image" style="width: 80px; height: 80px; margin-right: 10px" />
                <div style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  ">
                  <div style="text-align: center; font-size: 20px">
                    <span v-html="formatName(value.name)"></span>
                  </div>
                  <div style="margin-left: 15px; text-align: center" :style="{ color: value.color }">
                    <span style="font-weight: bold; font-size: 25px">{{ value.height }} %</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      chartData: [
        {
          label: "Dato 1",
          values: [],
        },
      ],
    };
  },
  methods: {
    formatName(name) {
      return name.replace(/<br>/g, "<br/>");
    },
  },
  mounted() {
    var arrayColors = [
  "#FF0000", // Partido Liberal Radical Ecuatoriano
  "#FFD700", // Partido Roldosista Ecuatoriano
  "#000000", // Concentración de Fuerzas Populares
  "#008F4C", // Democracia Popular
  "#FFD700", // Partido Social Cristiano
  "#D0FF14", // Partido Conservador Ecuatoriano
  "#CD5C5C", // Frente Amplio de Izquierda
  "#CC0000", // PRE
  "#FFA500", // Izquierda Democrática 
  "#6F917C", // APRE
  "#FF4500", // MPD 
  "#AA0000" //Partido socialista
];

    var presidentes = [
      "Bolivar \n Chiriboga",
      "Bolívar \n González",
      "Averroes \n Bucaram",
      "Vladimiro \n Álvarez",
      "Jaime \n Nebot",
      "Sixto \n Durán-Ballén",
      "Gustavo \n Iturralde",
      "Abdalá \n Bucaram",
      "Raúl \n Baca",
      "Frank \n Vargas",
      "Fausto \n Moreno",
      "León \n Roldós",
    ];
    var porcentaje = [0.96, 0.35, 1.37, 1.89, 25.03, 31.88, 0.46, 21.96, 8.45, 3.16, 1.92,2.58];

    for (var i = 0; i < arrayColors.length; i++) {
      this.chartData[0].values.push({
        color: arrayColors[i],
        height: porcentaje[i],
        image: require(`@/modules/1992/assets/Candidatos/${i + 1}.png`),
        bar_image: require(`@/modules/1992/assets/Partidos/${i + 1}.jpg`),
        name: this.formatName(presidentes[i]),
      });
    }
  },
};
</script>

<style scoped>
.color {
  align-items: center;
  margin-top: 40px;
  padding: 10px;
}
</style>
