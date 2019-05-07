<template>
	<div>
		<Navbar/>
		<form class="container-fluid height">
			<div class="form-body container-fluid">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
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
									<router-link to="/mail">¿Olvidaste tu contraseña?</router-link>
								</div>
								<hr>
								<p class="center">¿Aún no estás registrado?</p>
								<div class="row button">
									<button><router-link to="/registro">¡Regístrate Aquí!</router-link></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
export default {
	name: 'IniciarSesionForm',
	components: {
		Navbar
	}
}
</script>

<style scoped>
	.height {
		height: 100vh !important;
		margin-top: 0.5rem;
	}
	.cont {
		padding-top: 15px;
    padding-left: 45px;
    padding-right: 45px;
		margin-top: 3rem;
	}
	.center {
		text-align: center;
		margin-top: 15%;
		margin-bottom: 10%;
	}
	.form-body {
		display:flex;
		justify-content: center;
	}
	.form {
		background-color: white;
		width: 25rem;
		height: 90vh;
		border-radius: 15px;
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


