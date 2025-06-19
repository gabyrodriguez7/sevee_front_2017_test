import Inicio from '../components/InicioPagina'
import VotantesNacionales from '../components/VotantesNacionales.vue';
import VotantesExtranjero from '../components/VotantesExtranjero.vue';
import VotantesNacionales2017 from '../modules/2017/components/VotantesNacionales.vue'
import VotantesExtranjero2017 from '../modules/2017/components/VotantesExtranjero.vue'
import VotantesNacionales2009 from '../modules/2009/components/VotantesNacionales.vue'
import VotantesExtranjero2009 from '../modules/2009/components/VotantesExtranjero.vue'
import VotantesNacionales2013 from '../modules/2013/components/VotantesNacionales.vue'
import VotantesExtranjero2013 from '../modules/2013/components/VotantesExtranjero.vue'
import VotantesNacionales1992 from '../modules/1992/components/VotantesNacionales.vue';
import AcercaDe from '../components/AcercaDe';

export default [
  {
    path: '/',
    component: Inicio,
    name: 'inicio'
  },
  {
    path: '/votantesNacionales',
    component: VotantesNacionales,
    name: 'VotantesNacionales'
  },
  {
    path: '/VotantesExtranjero',
    component: VotantesExtranjero,
    name: 'VotantesExtranjero'
  },
    {
    path: '/VotantesNacionales1992',
    component: VotantesNacionales1992,
    name: 'VotantesNacionales1992'
  },
  {
    path: '/votantesNacionales2017',
    component: VotantesNacionales2017,
    name: 'VotantesNacionales2017'
  },
  {
    path: '/votantesExtranjero2017',
    component: VotantesExtranjero2017,
    name: 'VotantesExtranjero2017'
  },
  {
    path: '/votantesNacionales2009',
    component: VotantesNacionales2009,
    name: 'VotantesNacionales2009'
  },
  {
    path: '/votantesExtranjero2009',
    component: VotantesExtranjero2009,
    name: 'VotantesExtranjero2009'
  },
  {
    path: '/VotantesNacionales2013',
    component: VotantesNacionales2013,
    name: 'VotantesNacionales2013'
  },
  {
    path: '/VotantesExtranjero2013',
    component: VotantesExtranjero2013,
    name: 'VotantesExtranjero2013'
  },
  {
    path: '/acerca',
    component: AcercaDe,
    name: 'AcercaDe'
  }
];