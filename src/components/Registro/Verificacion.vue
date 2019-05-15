<template>
	<div>
		<Navbar/>
		<form class="container">
			<div class="form">
				<div class="container cont">
					<p>Por favor, ingresa el código de verificación que se te envió por sms para continuar.</p>
					<div class="row">
						<input type="text" required>
					</div>
					<div class="row btn-center">
						<button class="button"><router-link class="button" to="/solicita-tu-credito">Enviar</router-link></button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
import Navbar from '../Navbar/Navbar.vue';

export default {
	name: 'Verificacion',
	components: {
		Navbar
	}
}
</script>
<style scoped>
	form {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.form {
		width: auto;
		height: auto;
		border-radius: 5px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
		margin-top: 8rem;
	}
	.cont {
		padding: 1.5rem 3rem 1rem;
	}
	.button {
		color: black !important;
		text-align: center;
		margin-top: 30px;
		margin-bottom: 30px;
		padding: 4px 25px;
		border: 0;
		border-radius: 5px;
		background-color: rgb(156, 133, 150, .72);
	}
	.btn-center {
		justify-content: center;
	}
	input {
		width: 100%;
	}
	a {
    color: transparent;
    text-decoration: none !important;
    background-color: transparent !important;
  }
</style>


