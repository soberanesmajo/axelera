<template>
  <div class="seccion">
    <section class="container">
      <p class="text">AXELERA ES UNA EMPRESA MEXICANA ENFOCADA EN OFRECER SOLUCIONES FINANCIERAS A LOS TRABAJADORES DE CUALQUIER EMPRESA DE FORMA ÁGIL, SENCILLA Y PERSONALZADA.</p>
      <p class="text">ENTENDEMOS QUE PEDIR UN CRÉDITO SUELE SER UN PROCESO LARGO Y COMPLICADO, POR ESO NUESTRO COMPROMISO ES OFRECERTE UNA EXPERIENCIA AMIGABLE Y DARTE RESPUESTA EN MENOS DE 24 HORAS.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Nosotros'
}
</script>

<style scoped>
  .text {
    color: #745B6F;
    text-align: center;
    margin-top: 1rem;
    font-size: larger;
    font-weight: bold;
  }
  .seccion {
		height: 60vh;
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


