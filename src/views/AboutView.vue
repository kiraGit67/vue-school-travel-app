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
import { ref } from "vue";

export default {
  setup() {
    const vueJSdevelopers = ref("140,000");
    const countries = ref(136);
    const visitorsCount = ref("1.6 Million");
    const premiumCourses = ref(720);

    const products = ref([
      {
        id: 1,
        name: "Courses",
        url: "https://vueschool.io/courses",
      },
      {
        id: 2,
        name: "Workshops",
        url: "https://vueschool.io/workshops",
      },
      {
        id: 3,
        name: "Vue Masterclass",
        url: "https://vueschool.io/the-vuejs-master-class",
      },
      {
        id: 4,
        name: "Mastering Nuxt",
        url: "https://masteringnuxt.com/",
      },
    ]);

    const contactData = ref([
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
    ]);

    const socialMedia = ref([
      {
        id: 1,
        name: "Facebook",
        alt: "Vue School on Facebook",
        url: "https://www.facebook.com/vueschool/",
        img: "",
      },
      {
        id: 2,
        name: "Twitter",
        alt: "Vue School on Twitter",
        url: "https://twitter.com/vueschool_io",
        img: "",
      },
      {
        id: 3,
        name: "Instagram",
        alt: "Vue School on Instagram",
        url: "https://www.instagram.com/vueschool/",
        img: "",
      },
      {
        id: 4,
        name: "YouTube",
        alt: "Vue School on YouTube",
        url: "https://www.youtube.com/@vueschool",
        img: "",
      },
      {
        id: 5,
        name: "LinkedIn",
        alt: "Vue School on LinkedIn",
        url: "https://www.linkedin.com/company/vueschool",
        img: "",
      },
    ]);

    return {
      vueJSdevelopers,
      countries,
      visitorsCount,
      premiumCourses,
      products,
      contactData,
      socialMedia,
    };
  },
  /*
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
  */
};
</script>

<style scoped>
.contact-data > p {
  display: grid;
  grid-template-columns: 180px 1fr;
}
</style>
