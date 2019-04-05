<template>
  <div>
    <Navbar/>
    <BackgroundCalculator/>
    <comoFuncionamos/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import BackgroundCalculator from './components/BackgroundCalculator.vue';
import comoFuncionamos from './components/comoFuncionamos.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    BackgroundCalculator,
    comoFuncionamos
  }
}
</script>

<style>

</style>