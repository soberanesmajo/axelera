<template>
	<form>
		<div class="form">
			<div class="container cont">
				<h5 class="header">¡ Regístrate !</h5>
				<p>Nombre de usuario<span>*</span></p>
					<div class="row">
						<input class="input" type="text" placeholder="">
					</div>
					<br>
					<p>Correo<span>*</span></p>
					<div class="row">
						<input class="input" type="text" placeholder="">
					</div>
					<br>
					<p>Contraseña<span>*</span></p>
						<div class="row">
							<input class="input" type="text" placeholder="">
						</div>
					<br>
					<p>Confirmar contraseña<span>*</span></p>
						<div class="row">
							<input class="input" type="text" placeholder="">
						</div>
					<div class="row button">
						<button><router-link to="/iniciar-sesion">Registrarse</router-link></button>
					</div>
					<hr>
					<p class="center">¿Ya tienes cuenta? <span><router-link to="/iniciar-sesion">Inicia Sesión</router-link></span></p>
			</div>
		</div>
	</form>
</template>

<script>
export default {
  name: 'FormRegistro'
}
</script>

<style scoped>
	.cont {
		padding-top: 15px;
    padding-left: 45px;
    padding-right: 45px;
	}
	.center {
		text-align: center;
		margin-top: 15%;
		margin-bottom: 10%;
	}
	.form {
		background-color: white;
		width: 25rem;
		height: 43rem;
		border-radius: 15px;
		margin-top: 10%;
		margin-bottom: 10%;
	}
	.header {
		text-align: center;
		color: #745B6F;
		margin-top: 5%;
		margin-block-end: 10%;
	}
	input.input {
		width: 100% !important;
	}
	.row {
		margin: 0;
	}
	span {
		color: red;
	}
	button {
		text-align: center;
		margin-top: 30px;
		margin-bottom: 30px;
		padding: 4px 25px;
		border: 0;
		border-radius: 5px;
		background-color: rgb(156, 133, 150, .72);
	}
	.button {
		justify-content: center;
	}
	button a {
		color: black !important;
		text-decoration: none;
		background-color: transparent !important;
	}
	hr {
		height: 1px;
		color: black;
		background-color: black;
		border: none;
	}
</style>


