<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
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
        <div class="card">
          <img
            :src="`/images/${experience.image}`"
            :alt="experience.name"
            :title="experience.name"
          />
          <div class="card__text">{{ experience.name }}</div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import sourceData from "@/data.json";
export default {
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
