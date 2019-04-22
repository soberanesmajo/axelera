<template>
	<form>
		<div class="form">
			<div class="container cont">
				<h5 class="header">INICIAR SESIÓN</h5>
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
				<div class="row button">
					<button>INICIAR SESIÓN</button>
				</div>
				<div class="a">
					<a href="#">¿Olvidaste tu contraseña?</a>
				</div>
				<hr>
				<p class="center">¿Aún no estás registrado?</p>
				<div class="row button">
					<button>¡Regístrate Aquí!</button>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
export default {
  name: 'FormLogin'
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
		margin-top: 20px;
		padding: 4px 25px;
		border: 0;
		border-radius: 5px;
		background-color: rgb(156, 133, 150, .72);
	}
	.button {
		justify-content: center;
	}
	.a {
		margin-top: 15%;
		margin-bottom: 20%;
	}
	hr {
		height: 1px;
		color: black;
		background-color: black;
		border: none;
	}
</style>


