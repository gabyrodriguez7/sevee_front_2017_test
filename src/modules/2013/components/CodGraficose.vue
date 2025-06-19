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
      <div style="margin-left: 100px">
        <div v-for="(data, index) in chartData" :key="index" style="margin-top: 200px; white-space: nowrap">
          <div>
            <div v-for="(value, dataIndex) in data.values" :key="dataIndex" style="
                display: inline-block;
                margin-right: 20px;
                position: relative;
              ">
              <div :style="`background-color: ${value.color}; height: ${value.height * 4.75
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
  name: "CodGraficose2013",
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
      "#CACE03",
      "#02C01C",
      "#7E3CDF",
      "#AA5A00",
      "#455709",
      "#002CFF",
      "#B40000",
      "#00C4B6",
    ];
    var presidentes = [
      "Alvaro \n Noboa",
      "Rafael \n Correa",
      "Norman \n Wray",
      "Alberto \n Acosta",
      "Lucio \n Gutierrez",
      "Guillermo \n Lasso",
      "Nelson \n Zavala",
      "Mauricio \n Rodas",
    ];
    var porcentaje = [3.52, 77.51, 0.81, 2.38, 2.47, 11.14, 0.89, 1.28];

    for (var i = 0; i < arrayColors.length; i++) {
      this.chartData[0].values.push({
        color: arrayColors[i],
        height: porcentaje[i],
        image: require(`@/modules/2013/assets/Candidatos/${i + 1}.png`),
        bar_image: require(`@/modules/2013/assets/Partidos/${i + 1}.jpg`),
        name: this.formatName(presidentes[i]),
      });
    }
  },
};
</script>

<style scoped></style>
