<template>
  <div>
    <form class="form">
      <h1>Contact Us</h1>
      <div class="form-row">
        <div class="input-wrapper">
          <label for="firstname">Firstname</label>
          <input
            type="text"
            v-model="firstname"
            id="firstname"
            name="firstname"
            class="input"
          />
        </div>
        <div class="input-wrapper">
          <label for="lastname">Lastname</label>
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
          <label for="email">E-Mail</label>
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
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import dataSource from "@/data.json";

export default {
  setup() {
    const firstname = ref("");
    const lastname = ref("");
    const companyName = ref("");
    const email = ref("");

    const destinations = dataSource.destinations;

    const chosenDestination = ref("");
    const additionalNotes = ref("");

    return {
      firstname,
      lastname,
      companyName,
      email,
      destinations,
      chosenDestination,
      additionalNotes,
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
</style>
