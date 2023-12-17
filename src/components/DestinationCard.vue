<template>
  <article class="destination-card">
    <img
      :src="`/images/${destination.image}`"
      :alt="destination.name"
      :title="destination.name"
    />
    <div>
      <h2>{{ destination.name }}</h2>
      <p>{{ destination.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    destination: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.destination-card {
  border-radius: 0.75rem;
  border: 1px solid rgb(44, 62, 80);
  background-color: white;
  box-shadow: 0 0 15px rgba(44, 62, 80, 0.35);
}

.destination-card > img {
  width: 100%;
  border-top-right-radius: 0.75rem;
  border-top-left-radius: 0.75rem;
}

.destination-card > div,
.destination-card > div > h2 {
  padding-inline: 1.5rem;
  text-align: center;
}

.destination-card > div > h2 {
  color: turquoise;
}
</style>
