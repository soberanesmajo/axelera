<template>
  <div>
    <Navbar/>
    <!-- <BackgroundCalculator/> -->
    <!-- <ComoFuncionamos/> -->
    <!-- <Requisitos/> -->
    <!-- <Nosotros/> -->
    <!-- <Footer/>  -->
    <!-- <Personal/> -->
    <!-- <Adelanto/> -->
    <!-- <Preguntas/> -->
    <Contacto/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import BackgroundCalculator from './components/BackgroundCalculator.vue';
import ComoFuncionamos from './components/ComoFuncionamos.vue';
import Requisitos from './components/Requisitos.vue';
import Nosotros from './components/Nosotros.vue';
import Footer from './components/Footer.vue';
import Personal from './components/Personal.vue';
import Adelanto from './components/Adelanto.vue';
import Preguntas from './components/Preguntas.vue';
import Contacto from './components/Contacto.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    BackgroundCalculator,
    ComoFuncionamos,
    Requisitos,
    Nosotros,
    Footer,
    Personal,
    Adelanto,
    Preguntas,
    Contacto
  }
}
</script>

<style>
</style>