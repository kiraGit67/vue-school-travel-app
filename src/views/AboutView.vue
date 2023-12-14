<template>
  <div class="about">
    <h1>About Us</h1>
    <div class="two-cols">
      <div id="contact">
        <h2>How to contact us</h2>
        <div class="contact-data">
          <p v-for="contact in contactData" :key="contact.id">
            <span>{{ contact.name }}</span>
            <span v-if="contact.id === 2"
              ><a :href="`mailto:${contact.value}`">{{
                contact.value
              }}</a></span
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
      <div id="following">
        <h2>Follow us on Social Media</h2>
        <div class="social-media">
          <span v-for="social in socialMedia" :key="social.id">
            <a :href="social.url" target="_blank" :title="social.alt"
              >{{ social.name }} <img src="social.imgSource"
            /></a>
          </span>
        </div>
      </div>
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
        value: "travelApp@vueschool.io",
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
        imgSource: "./assets/social-media-icons/facebook-logo.png",
        class: "fa-brands fa-square-facebook",
      },
      {
        id: 2,
        name: "Twitter",
        alt: "Vue School on Twitter",
        url: "https://twitter.com/vueschool_io",
        imgSource: "./assets/social-media-icons/square-twitter.svg",
        class: "fa-brands fa-square-twitter",
      },
      {
        id: 3,
        name: "Instagram",
        alt: "Vue School on Instagram",
        url: "https://www.instagram.com/vueschool/",
        imgSource: "./assets/social-media-icons/square-instagram.svg",
        class: "fa-brands fa-square-instagram",
      },
      {
        id: 4,
        name: "YouTube",
        alt: "Vue School on YouTube",
        url: "https://www.youtube.com/@vueschool",
        imgSource: "./assets/social-media-icons/youtube.svg",
        class: "fa-brands fa-youtube",
      },
      {
        id: 5,
        name: "LinkedIn",
        alt: "Vue School on LinkedIn",
        url: "https://www.linkedin.com/company/vueschool",
        imgSource: "./assets/social-media-icons/linkedin.svg",
        class: "fa-brands fa-linkedin",
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
h2 {
  text-align: left;
}

.two-cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.contact-data > p {
  display: grid;
  grid-template-columns: 100px 1fr;
}

.social-media {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.social-media > span::after {
  content: "|";
  padding-left: 0.5rem;
  font-weight: bold;
  color: turquoise;
}

.social-media > span:last-child::after {
  content: "";
}

a:hover {
  color: turquoise;
  font-size: bold;
}

@media screen and (max-width: 767px) {
  .two-cols {
    grid-template-columns: 1fr;
  }
}
</style>
