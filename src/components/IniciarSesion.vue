<template>
	<div class="form" :style="myStyle">
		<FormLogin/>
	</div>
</template>

<script>
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
	}
</style>


