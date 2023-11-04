<template>
  <section class="experience">
    <h1>{{ experience.name }}</h1>
    <div class="destination-details">
      <img
        :src="`/images/${experience.image}`"
        :alt="experience.name"
        :title="experience.name"
      />
      <p>{{ experience.description }}</p>
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
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.slug
      );
    },
  },
};
</script>
