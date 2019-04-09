<template>
  <div>
    <Navbar/>
    <BackgroundCalculator/>
    <ComoFuncionamos/>
    <Requisitos/>
    <Nosotros/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import BackgroundCalculator from './components/BackgroundCalculator.vue';
import ComoFuncionamos from './components/ComoFuncionamos.vue';
import Requisitos from './components/Requisitos.vue';
import Nosotros from './components/Nosotros.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    BackgroundCalculator,
    ComoFuncionamos,
    Requisitos,
    Nosotros,
    Footer
  }
}
</script>

<style>
</style>