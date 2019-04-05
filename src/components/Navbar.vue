<template>
  <div>
    <nav class="nav">
      <div class="nav-wrapper">
        <img src="../assets/axelera_logo.svg" class="brand-logo logo">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down nav-list">
            <li><a class="color-text" href="sass.html">INICIO</a></li>
            <li><a class="color-text" href="badges.html">PRODUCTOS</a></li>
            <li><a class="color-text" href="collapsible.html">PREGUNTAS FRECUNTES</a></li>
            <li><a class="color-text" href="mobile.html">CONTACTO</a></li>
            <li><a class="color-text" href="mobile.html">INICIA SESIÓN</a></li>
            <a class="waves-effect waves-light btn-small btn">SOLICITA TU CRÉDITO</a>
          </ul>
      </div>
    </nav>
        
    <ul class="sidenav" id="mobile-demo">
      <li><a href="sass.html">INICIO</a></li>
      <li><a href="badges.html">PRODUCTOS</a></li>
      <li><a href="collapsible.html">PREGUNTAS FRECUENTES</a></li>
      <li><a href="mobile.html">CONTACTO</a></li>
      <li><a href="mobile.html">INICIA SESIÓN</a></li>
    </ul>  
  </div>           
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {
    background-color: white !important;
    position: fixed;
  }
  .nav-list{
    margin-right: 2%;
  }
  .logo {
    width: 80px;
    padding-top: 7px; 
    margin-left: 5%;
  }
  .color-text {
    color: #6D6D6D;
    font-size: 15px;
  }
  .btn {
    background-color: #32CD32;
  }
</style>
