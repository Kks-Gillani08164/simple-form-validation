<template>
  <div class="home">
    <RegistrationForm>
      <template #personal-information>
        <div class="input__container">
          <label for="firstname">First Name </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
          />
        </div>
        <div class="input__container">
          <label for="lastname">Last Name </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div class="input__container">
          <label for="email">Email Address </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <div class="input__container">
          <label for="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div class="input__container">
          <label for="confirm-password">Confirm Password </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
          />
        </div>
        <div class="input__container">
          <label for="phone">Mobile Number </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Mobile Number"
          />
        </div>
      </template>
      <template #general-information>
        <div class="input__container input__container--married">
          <label for="married">Married </label>
          <input
            v-model="formData.married"
            type="checkbox"
            id="married"
            name="married"
            placeholder="Married"
          />
        </div>
        <div class="input__container input__container--gender">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            v-model="formData.gender"
          />
          <label for="male">Male </label>
        </div>
        <div class="input__container input__container--gender">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            v-model="formData.gender"
          />
          <label for="female">Female </label>
        </div>
      </template>

      <button type="submit">Submit</button>
    </RegistrationForm>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationForm from "@/components/RegisterationForm.vue";

export default {
  name: "HomeView",
  components: {
    RegistrationForm,
  },
  computed: {
    formData() {
      return this.$store.getters.getFormData;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
}

input[type="text"],
input[type="password"],
input[type="tel"],
input[type="email"] {
  padding: 0.5rem 0.3rem;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 0.3rem;
}

.input__container--married {
  margin-bottom: 1rem;
}

.input__container--gender {
  margin-bottom: 0.5rem;
}

input[type="radio"] {
  margin-right: 0.5rem;
}

button {
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
  background-color: blueviolet;
  border: none;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  color: #fff;
  border-radius: 0.3rem;
}
</style>
