<template>
	<div>
		<Navbar/>
		<section class="container">
			<h4 class="header">CONTACTO</h4>
			<hr>
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<div class="container">
							<div class="row">
								<p>Prolongación Paseo de la Reforma 1015, Piso 9, Edificio B, Punta Santa Fe, Col. Desarrollo Santa Fe, CP 01376, Mexico DF.</p>
								<p>Tel +52 (55) 4210-5300</p>
							</div>
							<br>
							<div class="row">
								<p>NOMBRE<span>*</span></p>
							</div>
							<div class="row">
								<input class="col-4 space" type="text" placeholder="First">
								<input class="col-4 space" type="text" placeholder="Last">
							</div>
							<br>
							<div class="row">
								<p>EMAIL<span>*</span></p>
							</div>
							<div class="row">
								<input type="text">
							</div>
							<br>
							<div class="row">
								<p>MENSAJE<span>*</span></p>
							</div>
							<div class="row">
								<textarea name="" id="" cols="40" rows="5"></textarea>
							</div>
							<div class="row">
								<button>Enviar</button>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<img src="../../assets/mapa.png" alt="mapa">
					</div>
				</div>
			</div>
		</section>
		<Footer/>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import Footer from '../Footer/Footer.vue';

export default {
	name: 'contacto',
	components: {
		Navbar,
		Footer
	}
}
</script>

<style scoped>
	button {
		margin-top: 20px;
		padding: 4px 25px;
		border: 0;
		border-radius: 5px;
		background-color: rgb(156, 133, 150, .72);	
	}
	.header {
		text-align: left;
		color: #745B6F;
		margin-top: 15%;
	}
	.space {
		margin-right: 5px;
	}
	section {
		margin-bottom: 10%;
	}
	span {
		color: red;
	}
	img {
		width: 33rem;
		height: 30rem;
	}
</style>


