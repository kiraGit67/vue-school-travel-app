<template>
  <div>
    <form class="form">
      <h1>Contact Us</h1>
      <div class="form-row">
        <div class="input-wrapper">
          <label for="firstname">Firstname <span>*</span></label>
          <input
            type="text"
            v-model="firstname"
            id="firstname"
            name="firstname"
            class="input"
            :class="{ invalid: firstnameError !== '' }"
            @blur="validateFirstName"
          />
          <span v-if="firstnameError !== ''">{{ firstnameError }}</span>
        </div>
        <div class="input-wrapper">
          <label for="lastname">Lastname <span>*</span></label>
          <input
            type="text"
            v-model="lastname"
            id="lastname"
            name="lastname"
            class="input"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="input-wrapper">
          <label for="company">Company Name</label>
          <input
            type="text"
            v-model="companyName"
            id="company"
            name="company"
            class="input"
          />
        </div>
        <div class="input-wrapper">
          <label for="email">E-Mail <span>*</span></label>
          <input
            type="email"
            v-model="email"
            id="email"
            name="email"
            class="input"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="input-wrapper">
          <label for="notes">Additional Notes</label>
          <textarea
            v-model="additionalNotes"
            name="notes"
            id="notes"
            rows="5"
            class="input"
          ></textarea>
        </div>
        <div class="input-wrapper">
          <label for="chosen-destination">Choose A Destination</label>
          <select
            class="input"
            name="chosen-destination"
            id="chosen-destination"
            v-model="chosenDestination"
          >
            <option
              v-for="destination in destinations"
              :key="destination.id"
              :value="`${destination.id} - ${destination.slug}`"
            >
              {{ destination.name }}
            </option>
          </select>
          <input type="submit" value="Send" class="btn" />
        </div>
      </div>
      <p>All fields with "*" cannot be empty.</p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import dataSource from "@/data.json";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    const firstname = ref("");
    const firstnameError = ref("");

    const lastname = ref("");
    const lastnameError = ref("");

    const companyName = ref("");

    const email = ref("");
    const emailError = ref("");

    const destinations = dataSource.destinations;

    const chosenDestination = ref("");
    const additionalNotes = ref("");

    const validateFirstName = () => {
      if (firstname.value === "") {
        firstnameError.value = "Firstname cannot be empty.";
      } else {
        firstnameError.value = "";
      }
    };

    return {
      route,
      router,
      firstname,
      firstnameError,
      lastname,
      lastnameError,
      companyName,
      email,
      emailError,
      destinations,
      chosenDestination,
      additionalNotes,
      validateFirstName,
    };
  },
};
</script>

<style scoped>
.form {
  max-width: 1024px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-wrapper > span {
  color: red;
  margin-top: -15px;
  margin-bottom: 5px;
}

label > span {
  color: red;
}

.invalid {
  border-color: red;
}

@media screen and (max-width: 767px) {
  .form {
    margin-bottom: 3rem;
  }
  .form-row {
    display: block;
  }
}
</style>
