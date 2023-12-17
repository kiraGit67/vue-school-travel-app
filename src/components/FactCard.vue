<template>
  <article class="fact">
    <img
      :src="factImageSource"
      :alt="factCount + ' ' + factTitle"
      :title="fact.count + ' ' + fact.title"
    />
    <div class="text">
      <h2>{{ factCount + " " + factTitle }}</h2>
      <p>{{ factDescription }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    factImageSource: {
      type: String,
      required: true,
    },
    factID: {
      type: Number,
      required: true,
    },
    factCount: {
      type: Number,
      required: false,
    },
    factTitle: {
      type: String,
      required: true,
    },
    factDescription: {
      type: String,
      required: false,
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
