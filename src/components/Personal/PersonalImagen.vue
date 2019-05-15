<template>
	<section class="container-fluid">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<div class="container cont">
					<h3 class="h3">AXELERA</h3>
					<h3>PERSONAL</h3>
					<hr>
					<p>Crédito personalizado que puedes solicitar en línea de manera ágil, rápida y sencilla. Ofrecemos tasas competitivas, no cobramos comisiones ni solicitamos aval. La tasa de interés es fija y los plazos son flexibles. Nuestros créditos están asegurados en caso de fallecimiento, invalidez total o permanente.</p>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 no-padding">
				<div class="image">
					<img src="../../assets/personal.png">
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
	.cont {
		padding-left: 8%;
		padding-right: 8%;
	}
	.image {
		/* display: grid;
		height: 100%; */
		/* width: 100%;
		height: auto; */
		/* display: flex; */
		/* justify-content: center; */
		/* height: auto; */
	}
	img {
		/* width: 840px;
		height: 720px; */
		/* max-width: 100%; */
		/* max-height: 100vh; */
		width: 50%;
		/* height: auto;
		margin: auto; */
	}
	.no-padding {
		padding: 0;
		display: flex;
		justify-content: center;
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
		font-size: 1rem;
	}
	@media only screen and (device-width:768px) {
		.row {
			margin-top: 6%;
		}
	}
</style>
