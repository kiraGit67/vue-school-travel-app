<template>
  <div>
    <form class="form" @submit.prevent="submitForm">
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
            :class="{ invalid: lastnameError !== '' }"
            @blur="validateLastName"
          />
          <span v-if="lastnameError !== ''">{{ lastnameError }}</span>
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
            :class="{ invalid: emailError !== '' }"
            @blur="validateEmail"
          />
          <span v-if="emailError !== ''">{{ emailError }}</span>
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
      <p>All fields with "<span>*</span>" cannot be empty.</p>
      <p v-if="msg !== ''">{{ msg }}</p>
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

    const msg = ref("");

    const validateFirstName = () => {
      if (firstname.value === "") {
        firstnameError.value = "Firstname cannot be empty.";
      } else {
        firstnameError.value = "";
      }
    };

    const validateLastName = () => {
      if (lastname.value === "") {
        lastnameError.value = "Lastname cannot be empty.";
      } else {
        lastnameError.value = "";
      }
    };

    const validateEmail = () => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email.value)) {
        emailError.value = "Please insert a valid email address.";
      } else {
        emailError.value = "";
      }
    };

    const submitForm = () => {
      if (
        firstnameError.value === "" &&
        lastnameError.value === "" &&
        emailError.value === ""
      ) {
        //alert("Your Contact Data was sent successfully.");
        msg.value = "Your Contact Data was sent successfully.";

        window.firstname = firstname.value;
        window.lastname = lastname.value;
        window.email = email.value;
        window.companyName = companyName.value;
        window.chosenDestination = chosenDestination.value;
        window.additionalNotes = additionalNotes.value;

        const redirectPath = route.query.redirect || "/registration";
        router.push(redirectPath);
      } else {
        //alert("Formular contains Errors. Please control your inserted data.");
        msg.value =
          "Formular contains Errors. Please control your inserted data.";
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
      msg,
      validateFirstName,
      validateLastName,
      validateEmail,
      submitForm,
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

label > span,
p > span {
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
