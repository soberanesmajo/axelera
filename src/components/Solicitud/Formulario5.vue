<template>
	<div>		
		<section class="container form5">
			<div class="container cont-color" :style="myStyle">
				<form class="form">
					<p class="p">Por favor, ten a la mano tu identificación y comprobante de domicilio escaneados, los vamos a necesitar mas adelante. <span>*</span></p>
					<label>Paso 5 de 5</label>
					<div class="row">
						<b-form-input id="range-2" class="input" v-model="value" type="range" min="0" max="5" step="1"></b-form-input>
					</div>
					<h4>Documentos</h4>
					<p>Identificación Oficial<span class="span">*</span></p>
					<div class="row">
						<input type="file">
					</div>
					<div class="row">
						<span>(IFE, INE, Pasaporte)</span>
					</div>
					<br>
					<p>Comprobante de domicilio<span class="span">*</span></p>
					<div class="row">
						<input type="file">
					</div>
					<div class="row button">
						<button>Enviar</button>
					</div>
					<p class="p">Toda la información antes proporcionada es confidencial, usada solamente para el proceso de solicitud de financiamiento de CREDITEA, SAPI. de C.V. SOFOM ENR y no será compartida con terceros. Para dar continuidad a tu solicitud, puedes hacerlo en: hola@axelera.credit</p>
				</form>
			</div>
		</section>
		<Footer/>
	</div>
</template>

<script>
import Footer from '../Footer/Footer.vue';
export default {
	name: 'Formulario5',
	data(){
    return{
      myStyle:{
        backgroundColor: "rgb(156, 133, 150, .72)"	 
			},
			value: '5'
    }
  },
  components: {
		Footer
  }
}
</script>

<style scoped>
	.cont-color {
		padding: 30px;
		border-radius: 15px;
		margin-top: 10%;
		width: 50rem;
	}
	.form5 {
		margin-bottom: 5%;
	}
	.form {
		background-color: white;
		border-radius: 15px;
		padding: 20px;
	}
	h4 {
		color: #745B6F;
		margin: 3% 0;
	}
	.span {
		color: red;
	}
	.row {
		margin: 0;
	}
	select {
		width: 100%;
	}
	button {
		text-align: center;
		margin: 3rem 0.5rem;
		padding: 9px 25px;
		border: 0;
		border-radius: 5px;
		background-color: rgb(156, 133, 150, .72);
	}
	.p {
		font-size: 14px;
		text-align: justify;
	}
	span {
		font-size: 11px;
	}
	label {
		font-size: 11px;
	}
	.input[type=range]{
  height: 8px;
  margin-bottom: 2%;
  border-radius: 15px;
  }
  .input[type=range]::-webkit-slider-thumb{
  width: 15px;
  height: 15px;
  background: #988095;
  cursor: pointer;
  border-radius: 15px;
  }
</style>


