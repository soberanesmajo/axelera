<template>
	<div class="section">
		<header>
			<h4 class="header">¿CÓMO FUNCIONAMOS?</h4>
		</header>
		<section class="container">
			<div class="row">
				<div class="card" style="max-width: 15rem;">
					<div class="image-center">
						<img src="../../assets/solicita_tu_credito.png" class="card-img-top img" alt="Logotipo que hace referencia a la sección de solicita tu crédito">
					</div>
					<div class="card-body">
						<h5 class="card-title">SOLICITA TU CRÉDITO EN LÍNEA</h5>
						<hr>
						<p class="card-text">Completa el formulario de solicitud y adjunta tus documentos , únicamente necesitamos tu identificación oficial y comprobante de domicilio.</p>
					</div>
				</div>
				<div class="card" style="max-width: 15rem;">
					<div class="image-center">
						<img src="../../assets/analizamos_tu_informacion.png" class="card-img-top img" alt="Logotipo que hace referencia a la sección de solicita tu crédito">
					</div>
					<div class="card-body">
						<h5 class="card-title">ANALIZAMOS TU INFORMACIÓN</h5>
						<hr>
						<p class="card-text">Validamos de forma muy ágil tu información y te enviamos una propuesta.</p>
					</div>
				</div>
				<div class="card" style="max-width: 15rem;">
					<div class="image-center">
						<img src="../../assets/Firma_tu_contrato.png" class="card-img-top img" alt="Logotipo que hace referencia a la sección de solicita tu crédito">
					</div>
					<div class="card-body">
						<h5 class="card-title">FIRMA TU CONTRATO</h5>
						<hr>
						<p class="card-text">Una vez que aceptes la propuesta que preparamos para ti, agendamos una cita para recoger el contrato firmado en donde tu nos digas.</p>
					</div>
				</div>
				<div class="card" style="max-width: 15rem;">
					<div class="image-center">
						<img src="../../assets/recibe_el_dinero.png" class="card-img-top img" alt="Logotipo que hace referencia a la sección de solicita tu crédito">
					</div>
					<div class="card-body">
						<h5 class="card-title horas">RECIBE EL DINERO EN MENOS DE 24 HORAS</h5>
						<hr>
						<p class="card-text">Una vez recibida tu documentación en menos de 24 horas te depositamos tu crédito en la cuenta bancaria donde recibes tu nómina.</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'ComoFuncionamos'
}
</script>

<style scoped>
	.header {
		text-align: center;
		color: #745B6F;
		margin-top: 5%;
	}
	.container {
		height: 90%;
	}
	.card {
		margin-left: auto;
		margin-right: auto;
		border: 0;
	}
	.horas {
		font-size: 1.2rem;
	}
	.img {
		width: 130px;
	}
	.image-center {
		display: flex;
		justify-content: center;
		height: 130px;
	}
	.card-title {
		color: #3C3850;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}
	.card-text {
		text-align: justify;
	}
	.row {
		margin-top: 5%;
	}
	.section{
		height: 85vh;
	}
	hr {
		height: 1px;
		color: #988095;
		background-color: #988095;
		border: none;
	}
	@media only screen and (device-width:768px) {
		.section {
			margin-bottom: 15%;
		}
		.card {
			margin-left: 3.7rem;
			margin-right: 3.7rem;
			border: 0;
		}
	}
</style>


