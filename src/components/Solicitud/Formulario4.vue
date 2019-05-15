<template>
	<div>		
		<Navbar/>
		<section class="container form4">
			<div class="row">
				<div class="principal">
					<div class="container cont-color" :style="myStyle">
						<form class="form">
							<p class="p">Por favor, ten a la mano tu identificación y comprobante de domicilio escaneados, los vamos a necesitar mas adelante. <span>*</span></p>
							<label>Paso 4 de 5</label>
							<div class="row">
								<b-form-input id="range-2" class="input" v-model="value" type="range" min="0" max="5" step="1"></b-form-input>
							</div>
							<h4>Datos Laborales</h4>
							<p>Nombre de la empresa donde trabaja<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
							</div>
							<br>
							<p>Antigüedad laboral<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
							</div>
							<br>
							<p>Frecuencia de pago<span>*</span></p>
							<div class="row">
								<select>
									<option value="Semanal" >Semanal</option><option value="Catorcenal" >Catorcenal</option><option value="Quincenal" >Quincenal</option><option value="Mensual" >Mensual</option>
								</select>
							</div>
							<br>
							<p>Puesto<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
							</div>
							<br>
							<p>Correo electrónico del trabajo<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
							</div>
							<br>
							<p>Jefe Inmediato<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
							</div>
							<br>
							<p>Saldo Mensual<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
							</div>
							<br>
							<p>Monto solicitado<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
							</div>
							<br>
							<p>Plazo requerido<span>*</span></p>
							<div class="row">
								<select>
									<option value="6 Meses" >6 Meses</option><option value="12 Meses" >12 Meses</option><option value="18 Meses" >18 Meses</option><option value="24 Meses" >24 Meses</option>
								</select>
							</div>
							<br>
							<p>Destino de crédito<span>*</span></p>
							<div class="row">
								<select>
									<option value="Negocio" >Negocio</option><option value="Deuda" >Deuda</option><option value="Oportunidad" >Oportunidad</option><option value="Emergencia" >Emergencia</option><option value="Vacaciones" >Vacaciones</option><option value="Otro." >Otro.</option>
								</select>
							</div>
							<br>
							<p>Cuenta bancaria<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
								<label>(Cuenta donde recibes tu nómina)</label>
							</div>
							<br>
							<p>Banco<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
							</div>
							<br>
							<p>Clabe<span>*</span></p>
							<div class="row">
								<input class="input" type="text" required>
								<label>(18 dígitos)</label>
							</div>
							<div class="row button">
								<button><router-link class="dropdown-item" to="/solicita-tu-credito-3">Regresar</router-link></button>
								<button><router-link class="dropdown-item" to="/solicita-tu-credito-5">Avanzar</router-link></button>
							</div>
							<p class="p">Toda la información antes proporcionada es confidencial, usada solamente para el proceso de solicitud de financiamiento de CREDITEA, SAPI. de C.V. SOFOM ENR y no será compartida con terceros. Para dar continuidad a tu solicitud, puedes hacerlo en: hola@axelera.credit</p>
						</form>
					</div>
				</div>
			</div>
		</section>
		<Footer/>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import Footer from '../Footer/Footer.vue';
export default {
	name: 'Formulario4',
	data(){
    return{
      myStyle:{
        backgroundColor: "rgb(156, 133, 150, .72)"	 
			},
			value: '4'
    }
  },
  components: {
		Navbar,
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
	.form4 {
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
	a {
		color: black !important;
    text-decoration: none;
    background-color: transparent !important;
  }
	.principal {
		width: 100%;
		display: flex;
		margin-top: 10%;
	}
	@media only screen and (min-device-width:320px) and (max-device-width:556px) {
		.cont-color {
			margin-top: 5rem;
		}
	}
</style>


