<template>
  <div>
		<PersonalImagen/>
		<PersonalCards/>
		<Banner/>
		<Footer/>
	</div>
</template>

<script>
import PersonalImagen from './PersonalImagen.vue';
import PersonalCards from './PersonalCards.vue';
import Banner from '../Banner/Banner.vue';
import Footer from '../Footer/Footer.vue';

export default {
  name: 'Personal',
	components: {
		PersonalImagen,
		PersonalCards,
		Banner,
		Footer
	}
}
</script>

<style scoped>

</style>


