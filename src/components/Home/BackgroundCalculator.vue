<template>
	<div class=" container-fluid background-image">
		<div class="row">
			<Calculadora/>
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
	.container-fluid {
		display: flex;
		justify-content: flex-end;
		padding-right: 5rem;
	}
	.background-image {
		background-image: url("../../assets/background-calculator3.jpg");
		width: 100vw;
		height: 100vh;
		background-size: cover;
		background-position: bottom;
	}
	.row {
		margin-top: 2%;
	}
	@media only screen and (max-device-width:320px) {
		.background-image {
			background-image: url("../../assets/background-calculator.jpg");
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


