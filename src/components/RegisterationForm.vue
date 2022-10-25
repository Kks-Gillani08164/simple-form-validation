<template>
  <form @submit.prevent="onSubmit">
    <div v-if="localerrors">
      <p v-for="(error, index) in localerrors" :key="index">{{ error }}</p>
    </div>
    <legend>Personal Information</legend>
    <fieldset>
      <div class="input__container">
        <label for="firstname">First Name </label>
        <input
          v-model="formData.firstName"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First Name"
        />
      </div>
      <div class="input__container">
        <label for="lastname">Last Name </label>
        <input
          v-model="formData.lastName"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
        />
      </div>
      <div class="input__container">
        <label for="email">Email Address </label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div class="input__container">
        <label for="password">Password </label>
        <input
          v-model="formData.password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div class="input__container">
        <label for="confirm-password">Confirm Password </label>
        <input
          v-model="formData.confirmPassword"
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm Password"
        />
      </div>
      <div class="input__container">
        <label for="phone">Mobile Number </label>
        <input
          v-model="formData.phone"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Mobile Number"
        />
      </div>
    </fieldset>
    <legend>General Information</legend>
    <fieldset>
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
    </fieldset>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
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
      // const checkPhone = this.validPhone(this.formData.phone);

      this.localerrors = [];
      this.localerrors.push(
        ...[
          ...providedInputs,
          checkName,
          emailCheck,
          checkPassword,
          // checkPhone,
        ].filter((el) => el !== true)
      );

      if (this.localerrors.length > 0) {
        this.$store.commit("SETERRORS", this.localerrors);
      }

      if (this.localerrors.every((el) => el === true)) {
        this.$store.commit("UPDATEFORMDATA", this.formData);
        this.$store.commit("REMOVEERRORS");
      }
    },
  },
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
