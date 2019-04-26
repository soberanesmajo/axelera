<template>
	<div class="form" :style="myStyle">
		<Navbar/>
		<FormContrasena/>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import FormContrasena from './FormContrasena.vue';

export default {
	name: 'Restablecer',
	data(){
    return{
			myStyle:{
        backgroundColor: "rgb(156, 133, 150, .72)"	 
			}
    }
	},
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
		padding-top: 2%;
		height: 100vh;
	}
</style>


