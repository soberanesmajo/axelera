<template>
	<div class=" container-fluid background-image">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text">
				<div class="header">
					<div class="container">
						<h1>Préstamos personales hasta $150,000</h1>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<Calculadora/>
			</div>
		</div>
	</div>
</template>

<script>
import Calculadora from './Calculadora.vue';

export default {
	name: 'BackgroundCalculator',
	components: {
		Calculadora
	}
}
</script>

<style scoped>
	.container {
		padding: 20px 55px;
		width: 100%;
	}
	.background-image {
		background-image: url("../../assets/axelerahero.jpg");
		width: 100vw;
		height: 100vh;
		background-size: cover;
		background-position: bottom;
	}
	.row {
		margin-top: 2%;
	}
	h1 {
		font-size: 4rem;
	}
	.header {
		color: snow;
		margin-top: 5rem;
		font-weight: bolder;
	}
	.text {
		display: flex;
		align-items: center;
	}
	@media only screen and (max-device-width:320px) {
		.background-image {
			background-image: url("../../assets/axelerahero.jpg");
			width: 100vw;
			height: auto;
			background-size: cover;
			background-position: bottom;
			padding-bottom: 15px !important;
		}
	}
	@media only screen and (max-device-width:1024px) {
		.container-fluid {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 15px 0 15px;
		}
		.row {
			margin: 0;
		}
	}
</style>


