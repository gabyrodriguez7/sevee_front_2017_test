<template>
  <v-row justify="space-around">
    <!--Etiqueta Titulo Mapas-->
    <div style="margin-top: 10px">
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
      <div style="margin-left: 100px">
        <div v-for="(data, index) in chartData" :key="index" style="margin-top: 186.5px;white-space: nowrap; ">
          <div>
            <div v-for="(value, dataIndex) in data.values" :key="dataIndex" style="
                display: inline-block;
                margin-right: 20px;
                position: relative;
              ">
              <div :style="`background-color: ${value.color}; height: ${value.height * 6.15
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
  name: "CodGraficose2009",
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
      "#FF0000",
      "#DF3CB7",
      "#FF8C00",
      "#02C01C",
      "#ABAB01",
      "#03CEAD",
      "#CACE03",
      "#455709",
    ];
    var presidentes = [
      "Martha \n Bucaram",
      "Diego \n Delgado",
      "Carlos \n Gonzales",
      "Rafael \n Correa",
      "Melba \n Jacome",
      "Carlos \n Sagnay",
      "Alvaro \n Noboa",
      "Lucio \n Gutierrez",
    ];
    var porcentaje = [6.22, 0.54, 0.55, 62.57, 1.19, 0.75, 17.14, 10.99];

    for (var i = 0; i < arrayColors.length; i++) {
      this.chartData[0].values.push({
        color: arrayColors[i],
        height: porcentaje[i],
        image: require(`@/modules/2009/assets/Candidatos/${i + 1}.png`),
        bar_image: require(`@/modules/2009/assets/Partidos/${i + 1}.jpg`),
        name: this.formatName(presidentes[i]),
      });
    }
  },
};
</script>

<style scoped></style>
