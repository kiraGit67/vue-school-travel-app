<template>
  <div class="card">
    <img
      :src="`/images/${experience.image}`"
      :alt="experience.name"
      :title="experience.name"
    />
    <div class="card__text">{{ experience.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>
