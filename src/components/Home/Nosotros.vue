<template>
  <div class="seccion">
    <section class="container">
      <div class="image">
        <img src="../../assets/axelera_logo.png" alt="logo de axelera">
      </div>
      <p class="text">Axelera es una empresa mexicana enfocada en ofrecer soluciones financieras a los trabajadores de cualquier empresa de forma ágil, sencilla y personalzada.</p>
      <p class="text">Entendemos que pedir un crédito suele ser un proceso largo y complicado, por eso nuestro compromiso es ofrecerte una experiencia amigable y darte respuesta en menos de 24 horas.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Nosotros'
}
</script>

<style scoped>
  .container {
    padding: 2rem 15rem;
  }
  .text {
    color: #745B6F;
    text-align: center;
    margin-top: 1rem;
    font-size: larger;
    font-weight: bold;
  }
  .seccion {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.7rem;
  }
  img {
    width: 130px;
  }
  @media only screen and (min-device-width:320px) and (max-device-width:490px) {
    .seccion {
      height: auto;
      margin-bottom: 20%;
    }
  }
  @media only screen and (device-width:768px) {
    .seccion {
      height: 35vh;
    }
  }
</style>


