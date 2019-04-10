<template>
  <section class="background">
    <div class="container first">
      <div class="header-position">
        <h4 class="header">Tu respuesta en menos de 24 horas.</h4>
      </div>
      <div class="background-white">
        <div class="container second">

          <div class="card monto-credit">
            <h5>Monto de tu crédito</h5>
            <p>3,000 - 150,000</p>
            <input id="monto-range" type="range" min="3000" max="150000" step="1000" name="Monto del credito" value="3000">
            <div class="input-group mb-3">
              <input id="monto" class="form-control" type="number" min="3000" max="150000" step="1000" name="Monto del credito" placeholder="Monto del credito" value="3000">
            </div>
          </div>

          <div class="card plazo-credit">
            <h5>Plazo de tu crédito</h5>
            <p>3 meses - 24 meses</p>
            <input id="plazo-range" type="range" min="3" max="24" step="1" name="" value="3">
            <div class="input-group mb-3">
            <input class="form-control" id="plazo" type="number" min="3" max="24" name="Plazo del credito" placeholder="Plazo del credito" value="3">
            </div>
          </div>

          <div class="pagos">
            <h5>Tus pagos mensuales aproximados</h5>
            <span id="pagos">$</span>
          </div>
        </div>
      </div>
    </div>
	</section>
</template>

<script>
export default {
	name: 'Calculadora',
}
</script>

<style scoped>
  .card {
    padding: 2%;
    border: 0;
  }
  .first {
    padding-right: 20px;
    padding-left: 20px;
  }
  .form-control {
  text-align: center;
  border: 0;
  font-weight: bolder;
  }
  .second {
    padding-right: 43px;
    padding-left: 43px;
  }
	.background {
		background-color: rgb(156, 133, 150, .72);	
		height: 35rem;
		width: 28rem;
    margin-top: 20%;
    border-radius: 5px;
	}
	.background-white {
		background-color: white;
		height: 30rem;
	}
	.header {
		color: white;
		text-align: center;
	}
  .header-position {
		padding-top: 12px;
    padding-bottom: 10px;
  }
  h5 {
    text-align: center;
    color: #745B6F;
    font-weight: bold;
  }
  input[type=range]{
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  background-color: #745B6F;
  margin-bottom: 5%;
  outline: none;
  -webkit-transition: .2s;
  border-radius: 15px;
  }
  input[type=range]::-webkit-slider-thumb{
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #988095;
  cursor: pointer;
  border-radius: 15px;
  }
  input[type=number]:focus{
  box-shadow: 1px 1px 10px #A2869A;
  }
  p {
    text-align: center;
  }
  .pagos {
    border-color: #745B6F !important; 
    border-width: medium;
    padding: 2%;
  }
</style>


