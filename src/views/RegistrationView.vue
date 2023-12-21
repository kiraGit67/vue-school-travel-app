<template>
  <div>
    <h1>Registration</h1>
    <h2>Hello, {{ firstname }} {{ lastname }}</h2>
    <p>Your Data has been registered successfully.</p>
    <p class="data-row">
      <span>Firstname:</span><span>{{ firstname }}</span>
    </p>
    <p class="data-row">
      <span>Lastname:</span><span>{{ lastname }}</span>
    </p>
    <p class="data-row">
      <span>Email:</span
      ><span
        ><a :href="`mailto:${email}`">{{ email }}</a></span
      >
    </p>
    <p class="data-row">
      <span>Company Name:</span><span>{{ companyName }}</span>
    </p>
    <p class="data-row">
      <span>Chosen Destination:</span><span>{{ chosenDestination }}</span>
    </p>
    <p>Additional Notes: <br />{{ additionalNotes }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: window.firstname,
      lastname: window.lastname,
      email: window.email,
      companyName: window.companyName,
      chosenDestination: window.chosenDestination,
      additionalNotes: window.additionalNotes,
    };
  },
};
</script>

<style scoped>
p.data-row {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0.5rem;
}

.data-row > span:first-child,
a {
  font-weight: 600;
  color: darkturquoise;
}

a:hover {
  color: turquoise;
}

div {
  max-width: 50vw;
  margin-inline: auto;
  margin-bottom: 3.5rem;
}

@media screen and (max-width: 992px) {
  div {
    max-width: 97.5vw;
  }
}

@media screen and (max-width: 767px) {
  p.data-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
