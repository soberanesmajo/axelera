<template>
	<section class="container-fluid">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<div class="container">
					<h3 class="h3">AXELERA</h3>
					<h3>PERSONAL</h3>
					<hr>
					<p>CRÉDITO PERSONALIZADO QUE PUEDES SOLICITAR EN LÍNEA DE MANERA ÁGIL, RÁPIDA Y SENCILLA. OFRECEMOS TASAS COMPETITIVAS, NO COBRAMOS COMISIONES NI SOLICITAMOS AVAL. LA TASA DE INTERÉS ES FIJA Y LOS PLAZOS SON FLEXIBLES. NUESTROS CRÉDITOS ESTÁN ASEGURADOS EN CASO DE FALLECIMIENTO, INVALIDEZ TOTAL O PERMANENTE.</p>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 no-padding">
				<div class="image">
					<img src="../../assets/personal3.jpg">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PersonalImagen'
}
</script>

<style scoped>
	.container {
		padding-left: 8%;
		padding-right: 8%;
	}
	.image {
		display: grid;
		height: 100%;
	}
	img {
		/* width: 840px;
		height: 720px; */
		max-width: 100%;
		/* max-height: 100vh; */
		margin: auto;
	}
	.no-padding {
		padding: 0;
	}
	.h3 {
		margin-top: 35%;
		margin-bottom: 0;
	}
	h3 {
		color: #745B6F;
	}
	hr {
		margin-top: 7%;
		margin-bottom: 12%;
		height: 1px;
		color: #3C3850;
		background-color: #3C3850;
		border: none;
	}
	p {
		color: #3C3850;
		font-size: 14px;
	}
</style>
