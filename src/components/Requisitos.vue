<template>
	<div class="section">
		<header>
			<h4 class="header">¿QUÉ NECESITO PARA SOLICITAD MI CRÉDITO?</h4>
		</header>
		<section class="container">
			<div class="row">
				<div class="card" style="max-width: 15rem;">
					<div class="image-center">
						<img src="../assets/identificación.png" class="card-img-top img" alt="Logotipo que hace referencia a la sección de solicita tu crédito">
					</div>
					<div class="card-body">
						<h5 class="card-title">IDENTIFICACIÓN OFICIAL</h5>
					</div>
				</div>
				<div class="card" style="max-width: 15rem;">
					<div class="image-center">
						<img src="../assets/comprobante.png" class="card-img-top img" alt="Logotipo que hace referencia a la sección de solicita tu crédito">
					</div>
					<div class="card-body">
						<h5 class="card-title">COMPROBANTE DE DOMICILIO VIGENTE</h5>
					</div>
				</div>
				<div class="card" style="max-width: 15rem;">
					<div class="image-center">
						<img src="../assets/edad.png" class="card-img-top img" alt="Logotipo que hace referencia a la sección de solicita tu crédito">
					</div>
					<div class="card-body">
						<h5 class="card-title">TENER ENTRE 18 Y 60 AÑOS</h5>
					</div>
				</div>
				<div class="card" style="max-width: 15rem;">
					<div class="image-center">
						<img src="../assets/laboral.png" class="card-img-top img" alt="Logotipo que hace referencia a la sección de solicita tu crédito">
					</div>
					<div class="card-body">
						<h5 class="card-title">ANTIGÜEDAD LABORAL MÍNIMA 6 MESES</h5>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Requisitos'
}
</script>

<style scoped>
	.header {
		text-align: center;
		color: #745B6F;
		margin-top: 5%;
	}
	.card {
		margin-left: auto;
		margin-right: auto;
		border: 0;
	}
	.img {
		width: 100px
	}
	.image-center {
		display: flex;
		justify-content: center;
		height: 100px;
	}
	.card-title {
		color: #3C3850;
		text-align: center;
		margin-top: 1rem;
	}
	.row {
		margin-top: 5%;
	}
	.section {
		height: 75vh;
	}
</style>


