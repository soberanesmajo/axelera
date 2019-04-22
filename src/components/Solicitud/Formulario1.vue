<template>
	<div>		
		<section class="container form1">
			<div class="container cont-color" :style="myStyle">
				<form class="form">
					<p class="p">Por favor, ten a la mano tu identificación y comprobante de domicilio escaneados, los vamos a necesitar mas adelante. <span>*</span></p>
					<label>Paso 1 de 5</label>
					<div class="row">
						<b-form-input id="range-2" class="input" v-model="value" type="range" min="0" max="5" step="1"></b-form-input>
					</div>
					<h4>Déjanos ayudarte. Por favor ingresa tus datos para estar en contacto.</h4>
					<p>Nombre<span>*</span></p>
					<div class="row">
						<input class="input" type="text">
					</div>
					<br>
					<p>Apellido Paterno<span>*</span></p>
					<div class="row">
						<input class="input" type="text">
					</div>
					<br>
					<p>Apellido Materno<span>*</span></p>
					<div class="row">
						<input class="input" type="text">
					</div>
					<br>
					<p>Email<span>*</span></p>
					<div class="row">
						<input class="input" type="text">
					</div>
					<br>
					<p>Celular<span>*</span></p>
					<div class="row">
						<input class="input" type="text">
					</div>
					<br>
					<p class="p">Por este conducto autorizo expresamente a CREDITEA, SAPI DE C.V. SOFOM, E.N.R., para que por conducto de sus funcionarios facultados lleve a cabo Investigaciones, sobre mi comportamiento crediticio o el de la Empresa que represento en Trans Unión de México, S. A. SIC y/o Dun & Bradstreet, S.A. SIC En caso de que la solicitante sea una Persona Moral, declaro bajo protesta de decir verdad Ser Representante Legal de la empresa mencionada en esta autorización; manifestando que a la fecha de envio de la presente autorización los poderes no me han sido revocados, limitados, ni modificados en forma alguna.<span>*</span></p>
					<br>
					<select>
						<option value="sí">Sí</option>
						<option value="no">No</option>
					</select>
					<br>
					<div class="row button">
						<button>Avanzar</button>
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
	name: 'Formulario1',
	data(){
    return{
      myStyle:{
        backgroundColor: "rgb(156, 133, 150, .72)"	 
			},
			value: '1'
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
	.form1 {
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
	span {
		color: red;
	}
	.row {
		margin: 0;
	}
	input {
		width: 100%;
	}
	select {
		width: 100%;
	}
	button {
		text-align: center;
		margin-top: 3rem;
		margin-bottom: 3rem;
		padding: 9px 25px;
		border: 0;
		border-radius: 5px;
		background-color: rgb(156, 133, 150, .72);
	}
	.p {
		font-size: 14px;
		text-align: justify;
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


