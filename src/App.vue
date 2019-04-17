<template>
  <div>
    <!-- <Navbar/> -->
    <!-- <BackgroundCalculator/> -->
    <!-- <ComoFuncionamos/> -->
    <!-- <Requisitos/> -->
    <!-- <Nosotros/> -->
    <!-- <Footer/>  -->
    <!-- <Personal/> -->
    <!-- <Adelanto/> -->
    <!-- <Preguntas/> -->
    <!-- <Contacto/> -->
    <!-- <IniciarSesion/> -->
    <Registro/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import BackgroundCalculator from './components/Home/BackgroundCalculator.vue';
import ComoFuncionamos from './components/Home/ComoFuncionamos.vue';
import Requisitos from './components/Home/Requisitos.vue';
import Nosotros from './components/Home/Nosotros.vue';
import Footer from './components/Footer/Footer.vue';
import Personal from './components/Personal/Personal.vue';
import Adelanto from './components/Adelanto/Adelanto.vue';
import Preguntas from './components/Preguntas/Preguntas.vue';
import Contacto from './components/Contacto/Contacto.vue';
import IniciarSesion from './components/Iniciar_Sesion/IniciarSesion.vue';
import Registro from './components/Registro/Registro.vue';

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
    Contacto,
    IniciarSesion,
    Registro
  }
}
</script>

<style>
</style>