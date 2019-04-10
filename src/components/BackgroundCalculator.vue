<template>
	<div class=" container-fluid background-image">
		<!-- <img class="img" src="../assets/background-calculator.jpg"> -->
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<Calculadora/>
				</div>
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
	.background-image {
		background-image: url("../assets/background-calculator.jpg");
		width: 100vw;
		height: 100vh;
		background-size: cover;
		background-position: bottom;
	}
	.row {
		justify-content: flex-end;
	}
</style>


