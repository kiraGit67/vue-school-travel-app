<template>
  <div>
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <go-back />
      <div class="destination-details">
        <img
          :src="`/images/${destination.image}`"
          :alt="destination.name"
          :title="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.view',
            params: { experienceSlug: experience.slug },
          }"
        >
          <experience-card :experience="experience" />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";

export default {
  components: { ExperienceCard, GoBack },
  props: {
    id: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    /*
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    */
    destination() {
      return sourceData.destinations.find(
        (destination) =>
          destination.id === this.id && destination.slug === this.slug
      );
    },
  },
};
</script>
