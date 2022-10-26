<template>
  <form @submit.prevent="onSubmit">
    <!-- <div v-if="localerrors">
      <p v-for="(error, index) in localerrors" :key="index">{{ error }}</p>
    </div> -->
    <legend>Personal Information</legend>
    <fieldset>
      <slot name="personal-information"></slot>
    </fieldset>
    <legend>General Information</legend>
    <fieldset>
      <slot name="general-information"></slot>
    </fieldset>
    <slot></slot>
  </form>
</template>

<script>
export default {
  /* data() {
    return {
      localerrors: [],
    };
  },

  computed: {
    formData() {
      return this.$store.getters.getFormData;
    },
  },

  methods: {
    required(value) {
      const keys = Object.keys(value);
      const result = keys.map((el) => {
        if (value[el] === "" || value[el] === null || value[el] === undefined) {
          return `${el} Field is Required`;
        }
        return true;
      });

      return result;
    },

    validName(firstName, lastName) {
      if (typeof firstName !== "string") {
        return "Please! Enter a valid First Name";
      }
      if (typeof lastName !== "string") {
        return "Please! Enter a valid Last Name";
      }
      if (lastName.length < 3) {
        return "Last Name at Least 3 Character Long";
      }

      return true;
    },

    validEmail(value) {
      let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (value.match(regex)) return true;
      return "Please! Enter a Valid Email Address";
    },

    validPassword(password, passwordConfirm) {
      if (password.length < 3) {
        return "Password must be at least 4 Character Long";
      }
      if (password !== passwordConfirm) {
        return "Entered Password is not the same as Confirm Password";
      }
      return true;
    },

    validPhone(phoneNumber) {
      const numberWithoutSpace = phoneNumber.replace(/\s+/g, "");
      if (isNaN(numberWithoutSpace) || numberWithoutSpace.length !== 11) {
        return "Please! Enter a Valid Phone Number";
      }
      return true;
    },

    onSubmit() {
      const providedInputs = this.required(this.formData);
      const checkName = this.validName(
        this.formData.firstName,
        this.formData.lastName
      );
      const emailCheck = this.validEmail(this.formData.email);
      const checkPassword = this.validPassword(
        this.formData.password,
        this.formData.confirmPassword
      );
      const checkPhone = this.validPhone(this.formData.phone);

      this.localerrors = [];
      this.localerrors.push(
        ...[
          ...providedInputs,
          checkName,
          emailCheck,
          checkPassword,
          checkPhone,
        ].filter((el) => el !== true)
      );

      if (this.localerrors.length > 0) {
        this.$store.commit("SET_ERRORS", this.localerrors);
      }

      if (this.localerrors.every((el) => el === true)) {
        this.$store.commit("UPDATE_FORM_DATA", this.formData);
        this.$store.commit("REMOVE_ERRORS");
        alert("Form Submitted Successfully");
      }
    },
  }, */
};
</script>

<style scoped>
p {
  color: red;
  margin-bottom: 0.5rem;
}
form {
  width: 27rem;
}
legend {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
fieldset {
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
}
</style>
