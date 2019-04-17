<template>
	<div>
		<AdelantoImagen/>
		<AdelantoCards/>
		<Banner/>
		<Footer/>
	</div>
</template>

<script>
import AdelantoImagen from './AdelantoImagen.vue';
import AdelantoCards from './AdelantoCards.vue';
import Banner from '../Banner/Banner.vue';
import Footer from '../Footer/Footer.vue';
export default {
  name: 'Adelanto',
	components: {
		AdelantoImagen,
		AdelantoCards,
		Banner,
		Footer
	}
}
</script>

<style scoped>

</style>


