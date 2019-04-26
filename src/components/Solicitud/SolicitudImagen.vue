<template>
	<section class="container-fluid">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<div class="container">
					<h3 class="h3">FORMULARIO</h3>
					<h3>DE SOLICITUD</h3>
					<hr>
					<p>AYÚDANOS LLENANDO EL FORMULARIO Y OBTÉN UNA PRE-AUTORIZACIÓN DE TU CRÉDITO EN MENOS DE 24 HORAS, EL PROCESO ES BREVE Y NO TE TOMARÁ MÁS DE 5 MINUTOS COMPLETARLO.</p>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 no-padding">
				<div class="image">
					<img src="../../assets/formulario.jpg">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'SolicitudImagen'
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
		max-width: 100%;
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
		text-align: justify;
	}
</style>
