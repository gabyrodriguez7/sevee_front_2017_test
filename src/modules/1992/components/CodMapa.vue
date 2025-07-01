<template>
  <div class="mapa" ref="mapa"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "CodMapa1992",
  props: { 
    id_1: { type: Array, default: () => [] }, 
    nvuelta: { type: String, default: "" } 
  },
  data() {
    return {
      chart: null,
      pais: null,
      provincia: null,
      canton: null,
      currentData: {
        cv: "1eraVuelta",
        cd: "General", 
        cm: 0,
        cm2: 0,
        min: "",
        max: ""
      }
    };
  },
  methods: {
    createMap() {
      console.log("Creando mapa con datos:", this.id_1);
      
      // Validar que id_1 sea un array
      if (!Array.isArray(this.id_1)) {
        console.warn("id_1 no es un array:", this.id_1);
        return;
      }
      
      // Limpiar mapa anterior si existe
      this.disposeMap();
      
      // Crear nuevo mapa
      this.chart = am4core.create(this.$refs.mapa, am4maps.MapChart);
      const chart = this.chart;
      
      // Configurar proyección y zoom
      chart.projection = new am4maps.projections.Miller();
      chart.zoomControl = new am4maps.ZoomControl();

      // Configurar variables de datos
      this.currentData.cv = this.id_1[0] || "1eraVuelta";
      this.currentData.cd = (this.id_1[1] && typeof this.id_1[1] === 'string' && this.id_1[1].trim() !== "") ? this.id_1[1] : "General";
      this.currentData.cm = parseInt(this.id_1[2]) || 0;
      this.currentData.cm2 = parseInt(this.id_1[3]) || 0;
      
      console.log("Datos configurados:", this.currentData);
      
      // Configurar colores según candidato
      this.setColors();

      // Crear series del mapa
      this.createPaisSeries(chart);
      this.createProvinciaSeries(chart);
      this.createCantonSeries(chart);
      
      // Configurar botón de regreso
      this.setupBackButton(chart);
      
      // Configurar exportación
      this.setupExporting(chart);
      
      // Cargar datos iniciales
      this.loadInitialData();
    },

    setColors() {
      const cd = this.currentData.cd;
      switch (cd) {
        case "1":
          this.currentData.min = "#FF9191";
          this.currentData.max = "#FF0000";
          break;
        case "2":
          this.currentData.min = "#FFA9EA";
          this.currentData.max = "#DF3CB7";
          break;
        case "3":
          this.currentData.min = "#FFC782";
          this.currentData.max = "#FF8C00";
          break;
        case "4":
          this.currentData.min = "#7EFF90";
          this.currentData.max = "#02C01C";
          break;
        case "5":
          this.currentData.min = "#BFBFA6";
          this.currentData.max = "#ABAB01";
          break;
        case "6":
          this.currentData.min = "#7AF5E2";
          this.currentData.max = "#03CEAD";
          break;
        case "7":
          this.currentData.min = "#F9FC74";
          this.currentData.max = "#CACE03";
          break;
        case "8":
          this.currentData.min = "#92A061";
          this.currentData.max = "#455709";
          break;
        case "9":
          this.currentData.min = "#BFBFA6";
          this.currentData.max = "#ABAB01";
          break;
        case "10":
          this.currentData.min = "#7AF5E2";
          this.currentData.max = "#03CEAD";
          break;
        case "11":
          this.currentData.min = "#F9FC74";
          this.currentData.max = "#CACE03";
          break;
        case "12":
          this.currentData.min = "#92A061";
          this.currentData.max = "#455709";
          break;
        default:
          this.currentData.min = "#CCCCCC";
          this.currentData.max = "#666666";
      }
    },
    createPaisSeries(chart) {
      this.pais = chart.series.push(new am4maps.MapPolygonSeries());
      this.pais.useGeodata = true;
      
      const paisPolygon = this.pais.mapPolygons.template;
      paisPolygon.nonScalingStroke = true;
      paisPolygon.strokeWidth = 1.5;
      
      // Estado hover
      const hs = paisPolygon.states.create("hover");
      hs.properties.fill = am4core.color("#f23a7a");
      
      // Configurar tooltip y colores
      this.pais.dataSource.events.on("parseended", () => {
        const data = this.pais.dataSource.data;
        console.log("Datos del país cargados:", data);
        
        if (data && data.length > 0) {
          if (this.currentData.cd === "General") {
            paisPolygon.propertyFields.fill = "fill";
            paisPolygon.tooltipText = "[bold] {PROVINCIA}[/] {votos} votos\n [bold]{candidato1}[/] {votos1} votos ({porcentaje1}%) \n [bold]{candidato2}[/] {votos2} votos ({porcentaje2}%)";
          } else {
            this.pais.heatRules.push({
              property: "fill",
              target: paisPolygon,
              min: am4core.color(this.currentData.min),
              max: am4core.color(this.currentData.max),
              logarithmic: true,
            });
            paisPolygon.tooltipText = "[bold] {PROVINCIA}[/] \n [bold]{candidato}[/] \n {votos} votos ({value}%)";
          }
          
          // Forzar actualización del mapa
          this.pais.invalidateData();
        }
      });
      
      // Agregar manejo de errores
      this.pais.dataSource.events.on("error", (ev) => {
        console.error("Error loading data for país:", ev.target.url);
      });
      
      // Agregar evento de éxito para depuración
      this.pais.dataSource.events.on("done", () => {
        console.log("Datos del país cargados exitosamente desde:", this.pais.dataSource.url);
      });
      
      // Agregar evento de geodata cargada
      this.pais.geodataSource.events.on("done", () => {
        console.log("Geodata del país cargada exitosamente desde:", this.pais.geodataSource.url);
      });
      
      // Evento click en provincias
      paisPolygon.events.on("hit", (ev) => {
        ev.target.series.chart.zoomToMapObject(ev.target);
        const provId = ev.target.dataItem.dataContext.id;
        this.loadProvinciaData(provId);
      });
    },

    createProvinciaSeries(chart) {
      this.provincia = chart.series.push(new am4maps.MapPolygonSeries());
      this.provincia.useGeodata = true;
      this.provincia.hide();
      
      const provinciaPolygon = this.provincia.mapPolygons.template;
      provinciaPolygon.strokeWidth = 1.5;
      
      // Estado hover
      const hs2 = provinciaPolygon.states.create("hover");
      hs2.properties.fill = am4core.color("#367B25");
      
      // Mostrar provincia cuando se carga
      this.provincia.geodataSource.events.on("done", () => {
        this.pais.hide();
        this.provincia.show();
      });
      
      // Configurar tooltip y colores
      this.provincia.dataSource.events.on("parseended", () => {
        const data = this.provincia.dataSource.data;
        if (data && data.length > 0) {
          if (this.currentData.cd === "General") {
            provinciaPolygon.propertyFields.fill = "fill";
            provinciaPolygon.tooltipText = "[bold] {DPA_DESCAN}[/] {votos} votos\n [bold]{candidato1}[/] {votos1} votos ({porcentaje1}%) \n [bold]{candidato2}[/] {votos2} votos ({porcentaje2}%)";
          } else {
            this.provincia.heatRules.push({
              property: "fill",
              target: provinciaPolygon,
              min: am4core.color(this.currentData.min),
              max: am4core.color(this.currentData.max),
              logarithmic: true,
            });
            provinciaPolygon.tooltipText = "[bold] {DPA_DESCAN}[/] \n [bold]{candidato}[/] \n {votos} votos ({value}%)";
          }
        }
      });
      
      // Agregar manejo de errores
      this.provincia.dataSource.events.on("error", (ev) => {
        console.error("Error loading data for provincia:", ev.target.url);
      });
      
      // Evento click en cantones
      provinciaPolygon.events.on("hit", (ev) => {
        ev.target.series.chart.zoomToMapObject(ev.target);
        const cantonId = ev.target.dataItem.dataContext.id;
        this.loadCantonData(cantonId);
      });
    },

    createCantonSeries(chart) {
      this.canton = chart.series.push(new am4maps.MapPolygonSeries());
      this.canton.useGeodata = true;
      this.canton.hide();
      
      const cantonPolygon = this.canton.mapPolygons.template;
      cantonPolygon.strokeWidth = 1.5;
      
      // Estado hover
      const hs3 = cantonPolygon.states.create("hover");
      hs3.properties.fill = am4core.color("#367B25");
      
      // Mostrar cantón cuando se carga
      this.canton.geodataSource.events.on("done", () => {
        this.provincia.hide();
        this.canton.show();
      });
      
      // Configurar tooltip y colores
      this.canton.dataSource.events.on("parseended", () => {
        const data = this.canton.dataSource.data;
        if (data && data.length > 0) {
          if (this.currentData.cd === "General") {
            cantonPolygon.propertyFields.fill = "fill";
            cantonPolygon.tooltipText = "[bold] {DPA_DESPAR}[/] {votos} votos\n [bold]{candidato1}[/] {votos1} votos ({porcentaje1}%) \n [bold]{candidato2}[/] {votos2} votos ({porcentaje2}%)";
          } else {
            this.canton.heatRules.push({
              property: "fill",
              target: cantonPolygon,
              min: am4core.color(this.currentData.min),
              max: am4core.color(this.currentData.max),
              logarithmic: true,
            });
            cantonPolygon.tooltipText = "[bold] {DPA_DESPAR}[/] \n [bold]{candidato}[/] \n {votos} votos ({value}%)";
          }
        }
      });
      
      // Agregar manejo de errores
      this.canton.dataSource.events.on("error", (ev) => {
        console.error("Error loading data for canton:", ev.target.url);
      });
    },

    setupBackButton(chart) {
      const back = new am4core.Button();
      back.icon = new am4core.Sprite();
      back.padding(7, 5, 7, 5);
      back.width = 30;
      back.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
      back.marginBottom = 8;
      back.parent = chart.zoomControl;
      back.insertBefore(chart.zoomControl.plusButton);
      
      back.events.on("hit", () => {
        chart.goHome();
        this.goHome();
      });
    },

    setupExporting(chart) {
      // Menu para exportar los mapas en imágenes y png
      chart.exporting.menu = new am4core.ExportMenu();
      chart.exporting.align = "right";
      if (chart.exporting.menu.items[0]) {
        chart.exporting.menu.items[0].icon = "download.svg";
      }
      
      // Configurar adaptador de datos para exportación
      chart.exporting.adapter.add("data", (data) => {
        data.data = [];
        
        let sourceData = null;
        let prefix = "Ecuador";
        
        if (this.canton && this.canton.data && this.canton.data.length > 0) {
          sourceData = this.canton.data;
          prefix = "Canton";
        } else if (this.provincia && this.provincia.data && this.provincia.data.length > 0) {
          sourceData = this.provincia.data;
          prefix = "Provincia";
        } else if (this.pais && this.pais.data) {
          sourceData = this.pais.data;
          prefix = "Ecuador";
        }
        
        chart.exporting.filePrefix = prefix;
        
        if (sourceData) {
          for (let i = 0; i < sourceData.length; i++) {
            const row = sourceData[i];
            if (this.currentData.cd === "General") {
              data.data.push({
                [prefix === "Ecuador" ? "Provincia" : prefix === "Provincia" ? "Canton" : "Parroquia"]: 
                  row.PROVINCIA || row.DPA_DESCAN || row.DPA_DESPAR || row.parroquia,
                "Total de Votos": row.votos,
                "Candidato 1": row.candidato1,
                "Votos Candidato 1": row.votos1,
                "Candidato 2": row.candidato2,
                "Votos Candidato 2": row.votos2,
              });
            } else {
              data.data.push({
                [prefix === "Ecuador" ? "Provincia" : prefix === "Provincia" ? "Canton" : "Parroquia"]: 
                  row.PROVINCIA || row.DPA_DESCAN || row.DPA_DESPAR || row.parroquia,
                "Candidato": row.candidato,
                "Votos Candidato": row.votos,
                "Porcentaje": row.value,
              });
            }
          }
        }
        
        return data;
      });
    },
    loadInitialData() {
      const { cv, cd, cm, cm2 } = this.currentData;
      
      // Validar que cd no esté vacío o solo contenga espacios
      const candidato = (cd && typeof cd === 'string' && cd.trim() !== "") ? cd : "General";
      
      // Verificar que el componente no se esté destruyendo
      if (!this.chart || this.chart.isDisposed()) {
        return;
      }
      
      console.log("Cargando datos iniciales:", { cv, candidato, cm, cm2 });
      
      if (cm === cm2 && cm !== 0) {
        // Cargar provincia
        const geodataUrl = `mapa/${cm}/${cm2}.json`;
        const dataUrl = `Datos1992/${cv}/${candidato}/${cm}/${cm2}.json`;
        console.log("Cargando provincia - GeoData:", geodataUrl, "Data:", dataUrl);
        
        this.provincia.geodataSource.url = geodataUrl;
        this.provincia.dataSource.url = dataUrl;
        this.provincia.geodataSource.load();
        this.provincia.dataSource.load();
        this.provincia.reverseGeodata = true;
      } else if (cm === 0 && cm2 === 0) {
        // Cargar país (mapa nacional de 21 provincias para 1992)
        const geodataUrl = `mapa/1992/0/0.json`;
        const dataUrl = `Datos1992/${cv}/${candidato}/${cm}/${cm2}.json`;
        console.log("Cargando país - GeoData:", geodataUrl, "Data:", dataUrl);
        
        this.pais.geodataSource.url = geodataUrl;
        this.pais.dataSource.url = dataUrl;
        this.pais.geodataSource.load();
        this.pais.dataSource.load();
        this.pais.reverseGeodata = true;
      } else if (cm !== cm2) {
        // Cargar cantón
        const geodataUrl = `mapa/${cm}/${cm2}.json`;
        const dataUrl = `Datos1992/${cv}/${candidato}/${cm}/${cm2}.json`;
        console.log("Cargando cantón - GeoData:", geodataUrl, "Data:", dataUrl);
        
        this.canton.geodataSource.url = geodataUrl;
        this.canton.dataSource.url = dataUrl;
        this.canton.geodataSource.load();
        this.canton.dataSource.load();
        this.canton.reverseGeodata = true;
      }
    },

    loadProvinciaData(provId) {
      const { cv, cd, cm } = this.currentData;
      const prov = cm === 0 ? provId : cm;
      
      // Validar que cd no esté vacío o solo contenga espacios
      const candidato = (cd && typeof cd === 'string' && cd.trim() !== "") ? cd : "General";
      
      // Verificar que el componente no se esté destruyendo
      if (!this.chart || this.chart.isDisposed() || !this.provincia) {
        return;
      }
      
      this.provincia.geodataSource.url = `mapa/${prov}/${provId}.json`;
      this.provincia.dataSource.url = `Datos1992/${cv}/${candidato}/${prov}/${provId}.json`;
      this.provincia.geodataSource.load();
      this.provincia.dataSource.load();
      this.provincia.reverseGeodata = true;
    },

    loadCantonData(cantonId) {
      const { cv, cd, cm } = this.currentData;
      const prov = cm;
      
      // Validar que cd no esté vacío o solo contenga espacios
      const candidato = (cd && typeof cd === 'string' && cd.trim() !== "") ? cd : "General";
      
      // Verificar que el componente no se esté destruyendo
      if (!this.chart || this.chart.isDisposed() || !this.canton) {
        return;
      }
      
      this.canton.geodataSource.url = `mapa/${prov}/${cantonId}.json`;
      this.canton.dataSource.url = `Datos1992/${cv}/${candidato}/${prov}/${cantonId}.json`;
      this.canton.geodataSource.load();
      this.canton.dataSource.load();
      this.canton.reverseGeodata = true;
    },

    goHome() {
      // Verificar que el componente no se esté destruyendo
      if (!this.chart || this.chart.isDisposed() || !this.pais) {
        return;
      }
      
      this.pais.geodataSource.load();
      this.pais.show();
      this.provincia.hide();
      this.canton.hide();
    },

    disposeMap() {
      if (this.chart) {
        // Dispose series first
        if (this.pais) {
          this.pais.dispose();
          this.pais = null;
        }
        if (this.provincia) {
          this.provincia.dispose();
          this.provincia = null;
        }
        if (this.canton) {
          this.canton.dispose();
          this.canton = null;
        }
        
        // Then dispose the chart
        this.chart.dispose();
        this.chart = null;
      }
      
      // Limpia el div del mapa para evitar residuos
      if (this.$refs.mapa) {
        this.$refs.mapa.innerHTML = '';
      }
    }
  },

  mounted() {
    this.createMap();
  },

  watch: {
    id_1: {
      handler() {
        this.createMap();
      },
      deep: true
    }
  },

  beforeDestroy() {
    this.disposeMap();
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mapa {
  width: 100%;
  height: 500px;
}
</style>