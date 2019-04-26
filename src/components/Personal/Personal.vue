<template>
	<div>
		<Navbar/>
		<PersonalImagen/>
		<PersonalCards/>
		<Banner/>
		<Footer/>
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import PersonalImagen from './PersonalImagen.vue';
import PersonalCards from './PersonalCards.vue';
import Banner from '../Banner/Banner.vue';
import Footer from '../Footer/Footer.vue';

export default {
  name: 'Personal',
	components: {
		Navbar,
		PersonalImagen,
		PersonalCards,
		Banner,
		Footer
	}
}
</script>

<style scoped>
</style>


