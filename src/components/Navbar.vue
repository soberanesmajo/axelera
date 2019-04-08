<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex">
    <img src="../assets/axelera_logo.svg" class="logo">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav nav-list">
        <li class="nav-item">
          <a class="nav-link color-text" href="#">INICIO</a> 
        </li>
        <li class="nav-item">
          <a class="nav-link color-text" href="#">PRODUCTOS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link color-text" href="#">PREGUNTAS FRECUENTES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link color-text" href="#">CONTACTO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link color-text" href="#">INICIA SESIÓN</a>
        </li>
        <li>
          <button type="button" class="btn">SOLICITA TU CRÉDITO</button>
        </li>
      </ul>
    </div>
  </nav>          
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {
    position: fixed;
  }
  .nav-item {
    margin-top: auto;
    margin-bottom: auto;
  }
  .nav-link {
    padding: 0;
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
    color: white !important;
  }
</style>
