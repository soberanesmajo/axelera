<template>
	<div class="form" :style="myStyle">
		<FormMail/>
	</div>
</template>

<script>
import FormMail from './FormMail.vue'

export default {
	name: 'Mail',
	data(){
    return{
			myStyle:{
        backgroundColor: "rgb(156, 133, 150, .72)"	 
      }
    }
  },
	components: {
		FormMail
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


