<template>
	<div class="form" :style="myStyle">
		<FormRegistro/>
	</div>
</template>

<script>
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
	}
</style>


