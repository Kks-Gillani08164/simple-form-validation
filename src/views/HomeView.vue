<template>
  <div class="home">
    <RegistrationForm />
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
};
</script>
