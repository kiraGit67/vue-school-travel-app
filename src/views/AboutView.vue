<template>
  <div class="about">
    <h1>About Us</h1>
    <h2>How to contact us</h2>
    <div class="contact-data">
      <p v-for="contact in contactData" :key="contact.id">
        <span>{{ contact.name }}</span>
        <span v-if="contact.id === 2"
          ><a :href="`mailto:${contact.value}`">{{ contact.value }}</a></span
        >
        <span v-else-if="contact.id === 3">
          {{ contact.value.street }}<br />{{ contact.value.zipCode }}
          {{ contact.value.city }}<br />{{ contact.value.state }} /
          {{ contact.value.nation }}
        </span>
        <span v-else>{{ contact.value }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactData: [
        {
          id: 1,
          name: "Phone",
          value: "+33 179 456 789",
        },
        {
          id: 2,
          name: "E-Mail",
          value: "travelApp@vue-school.com",
        },
        {
          id: 3,
          name: "Address",
          value: {
            street: "Halifax Court No 1A",
            zipCode: "CA919PD",
            city: "Pasadena",
            state: "California",
            nation: "USA",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.contact-data > p {
  display: grid;
  grid-template-columns: 180px 1fr;
}
</style>
