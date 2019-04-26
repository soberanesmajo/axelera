<template>
	<div class="form" :style="myStyle">
		<Navbar/>
		<FormRegistro/>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import FormRegistro from './FormRegistro.vue'

export default {
	name: 'Registro',
	data(){
    return{
      myStyle:{
        backgroundColor: "rgb(156, 133, 150, .72)"	 
      }
    }
  },
	components: {
		Navbar,
		FormRegistro
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


