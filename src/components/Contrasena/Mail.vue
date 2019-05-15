<template>
	<div class="form">
		<Navbar/>
		<FormMail/>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import FormMail from './FormMail.vue';

export default {
	name: 'Mail',
	components: {
		Navbar,
		FormMail
	}
}
</script>

<style scoped>
	.form {
		display:flex;
		justify-content: center;
		align-items: center;
		/* padding-top: 2%;
		height: 100vh; */
	}
</style>


