<template>
  <div>
		<PersonalImagen/>
		<PersonalCards/>
	</div>
</template>

<script>
import PersonalImagen from './PersonalImagen.vue';
import PersonalCards from './PersonalCards.vue';

export default {
  name: 'Personal',
	components: {
		PersonalImagen,
		PersonalCards
	}
}
</script>

<style scoped>

</style>


