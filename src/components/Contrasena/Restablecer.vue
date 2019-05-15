<template>
	<div class="form">
		<Navbar/>
		<FormContrasena/>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import FormContrasena from './FormContrasena.vue';

export default {
	name: 'Restablecer',
	components: {
		Navbar,
		FormContrasena
	}
}
</script>

<style scoped>
	.form {
		display:flex;
		justify-content: center;
		align-items: center;
	}
</style>


