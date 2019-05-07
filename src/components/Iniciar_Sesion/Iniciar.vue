<template>
	<div class="form" :style="myStyle">
		<Navbar/>
		<IniciarSesionForm/>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import IniciarSesionForm from './IniciarSesionForm.vue'

export default {
	name: 'Iniciar',
	data(){
    return{
      myStyle:{
        backgroundColor: "rgb(156, 133, 150, .72)"	 
      }
    }
  },
	components: {
		Navbar,
		IniciarSesionForm
	}
}
</script>

<style scoped>
	.form {
		display:flex;
		justify-content: center;
		padding-top: 2%;
		height: auto;
		margin-top: 5%;
	}
</style>


