<template>
	<div class="form" :style="myStyle">
		<Navbar/>
		<FormLogin/>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import FormLogin from './FormLogin.vue'

export default {
	name: 'IniciarSesion',
	data(){
    return{
      myStyle:{
        backgroundColor: "rgb(156, 133, 150, .72)"	 
      }
    }
  },
	components: {
		Navbar,
		FormLogin
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


