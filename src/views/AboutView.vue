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
            <a :href="social.url" target="_blank">
              <img
                :src="social.imgSource"
                :title="social.alt"
                :alt="social.alt"
                style="height: 50px"
            /></a>
          </span>
        </div>
        <h2>Products</h2>
        <div class="products">
          <span v-for="product in products" :key="product.id"
            ><a :href="product.url" target="_blank">{{ product.name }}</a></span
          >
        </div>
      </div>
    </div>
    <div class="two-cols">
      <fact-card v-for="fact in facts" :key="fact.id" :fact="fact" />
    </div>
    <div class="four-cols">
      <destination-card
        v-for="destination in destinations"
        :key="destination.id"
        :destination="destination"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import sourceData from "@/data.json";
import FactCard from "@/components/FactCard.vue";
import DestinationCard from "@/components/DestinationCard.vue";

export default {
  components: { FactCard, DestinationCard },
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
        imgSource: require("@/assets/social-media-icons/square-facebook.svg"),
        class: "fa-brands fa-square-facebook",
      },
      {
        id: 2,
        name: "Twitter",
        alt: "Vue School on Twitter",
        url: "https://twitter.com/vueschool_io",
        imgSource: require("@/assets/social-media-icons/square-twitter.svg"),
        class: "fa-brands fa-square-twitter",
      },
      {
        id: 3,
        name: "Instagram",
        alt: "Vue School on Instagram",
        url: "https://www.instagram.com/vueschool/",
        imgSource: require("@/assets/social-media-icons/square-instagram.svg"),
        class: "fa-brands fa-square-instagram",
      },
      {
        id: 4,
        name: "YouTube",
        alt: "Vue School on YouTube",
        url: "https://www.youtube.com/@vueschool",
        imgSource: require("@/assets/social-media-icons/youtube.svg"),
        class: "fa-brands fa-youtube",
      },
      {
        id: 5,
        name: "LinkedIn",
        alt: "Vue School on LinkedIn",
        url: "https://www.linkedin.com/company/vueschool",
        imgSource: require("@/assets/social-media-icons/linkedin.svg"),
        class: "fa-brands fa-linkedin",
      },
    ]);

    const facts = ref([
      {
        id: 1,
        title: "Vue.js Developers",
        count: 140000,
        img: require("@/assets/facts-icons/vue-js-developers.png"),
        description:
          "140,000 developers have learned Vue.js through Vue School",
      },
      {
        id: 2,
        title: "Countries worldwide",
        count: 136,
        img: require("@/assets/facts-icons/countries-worldwide.png"),
        description:
          "We Teach Vue.js to developers from 136 countries worldwide",
      },
      {
        id: 3,
        title: "Million Visitors",
        count: 1.6,
        img: require("@/assets/facts-icons/visitors.png"),
        description: "Each year Vue School has over 1.6 Million sessions",
      },
      {
        id: 4,
        title: "+ Premium Vue.js Lessons",
        count: 712,
        img: require("@/assets/facts-icons/premium-vue-js-lessons.png"),
        description:
          "Over 712 premium lessons to learn Vue.js and the ecosystem",
      },
    ]);

    const FactCard = () => import("@/components/FactCard.vue");

    const destinations = ref(sourceData.destinations);

    const DestinationCard = () => import("@/components/DestinationCard.vue");

    return {
      vueJSdevelopers,
      countries,
      visitorsCount,
      premiumCourses,
      products,
      contactData,
      socialMedia,
      facts,
      FactCard,
      destinations,
      DestinationCard,
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
  margin-bottom: 3rem;
}

.contact-data > p {
  display: grid;
  grid-template-columns: 100px 1fr;
}

.social-media,
.products {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-media > span:last-child::after {
  content: "";
}

a:hover {
  color: turquoise;
  font-size: bold;
}

.four-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

@media screen and (max-width: 1024px) {
  .two-cols:nth-of-type(2) {
    grid-template-columns: 1fr;
  }

  .four-cols {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 767px) {
  .two-cols,
  .four-cols {
    grid-template-columns: 1fr;
  }
}
</style>
