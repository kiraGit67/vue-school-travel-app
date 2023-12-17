<template>
  <article class="fact">
    <img
      :src="fact.img"
      :alt="fact.count + ' ' + fact.title"
      :title="fact.count + ' ' + fact.title"
    />
    <div class="text">
      <h2>{{ fact.count + " " + fact.title }}</h2>
      <p>{{ fact.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    fact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.fact {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid #686dfa;
  border-radius: 0.5rem;
}

.fact h2 {
  color: #686dfa;
}
</style>
