<template>
  <div class="home">
    <RegistrationForm :submitMethod="validate">
      <legend>General Information</legend>
      <fieldset>
        <div class="input__container">
          <label for="firstname">First Name </label>
          <input
            v-model="this.formData.firstName"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
          />
          <div v-if="errors" class="errors-container">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.firstName }}
            </p>
          </div>
        </div>
        <div class="input__container">
          <label for="lastname">Last Name </label>
          <input
            v-model="this.formData.lastName"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
          />
          <div v-if="errors" class="errors-container">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.lastName }}
            </p>
          </div>
        </div>
        <div class="input__container">
          <label for="email">Email Address </label>
          <input
            v-model="this.formData.email"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
          <div v-if="errors" class="errors-container">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.email }}
            </p>
          </div>
        </div>
        <div class="input__container">
          <label for="password">Password </label>
          <input
            v-model="this.formData.password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <div v-if="errors" class="errors-container">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.password }}
            </p>
          </div>
        </div>
        <div class="input__container">
          <label for="confirm-password">Confirm Password </label>
          <input
            v-model="this.formData.confirmPassword"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
          />
          <div v-if="errors" class="errors-container">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.confirmPassword }}
            </p>
          </div>
        </div>
        <div class="input__container">
          <label for="phone">Mobile Number </label>
          <input
            v-model="this.formData.phone"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Mobile Number"
          />
          <div v-if="errors" class="errors-container">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.phone }}
            </p>
          </div>
        </div>
      </fieldset>
      <legend>Personal Information</legend>
      <fieldset>
        <div class="input__container input__container--married">
          <label for="married">Married </label>
          <input
            v-model="this.formData.married"
            type="checkbox"
            id="married"
            name="married"
            placeholder="Married"
          />
          <div v-if="errors" class="errors-container">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.married }}
            </p>
          </div>
        </div>
        <div class="input__container input__container--gender">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            v-model="this.formData.gender"
          />
          <label for="male">Male </label>
        </div>
        <div class="input__container input__container--gender">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            v-model="this.formData.gender"
          />
          <label for="female">Female </label>
          <div v-if="errors" class="errors-container">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.gender }}
            </p>
          </div>
        </div>
      </fieldset>
    </RegistrationForm>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationForm from "@/components/RegisterationForm.vue";

export default {
  name: "HomeView",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        married: false,
        gender: null,
      },
      errors: [],
    };
  },
  methods: {
    validate() {
      let errors = [];
      const keys = Object.keys(this.formData);
      // Checking Required Fields are present or Not
      errors.push(
        ...keys.map((el) => {
          if (
            this.formData[el] === "" ||
            this.formData[el] === null ||
            this.formData[el] === undefined
          ) {
            const fieldName = el
              .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
              .split(" ");
            const capitalizeFieldName = `${
              fieldName[0].charAt(0).toUpperCase() + fieldName[0].slice(1)
            }${fieldName[1] ? ` ${fieldName[1]}` : ""}`;
            return { [el]: `${capitalizeFieldName} is required` };
          }
          return true;
        })
      );

      // Validating if the name fields are valid
      if (typeof this.formData.firstName !== "string") {
        errors.push({ firstName: "Please! Enter a valid First Name" });
      }
      if (typeof this.formData.lastName !== "string") {
        errors.push({ lastName: "Please! Enter a valid Last Name" });
      }
      if (this.formData.lastName.length < 3) {
        errors.push({ lastName: "Last Name at Least 3 Character Long" });
      }

      // Validating Email Address
      let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (this.formData.email.match(regex)) errors.push(true);
      else {
        errors.push({ email: "Please! Enter a Valid Email Address" });
      }

      // Validating Passwords
      if (this.formData.password.length < 3) {
        errors.push({ password: "Password must be at least 4 Character Long" });
      }
      if (this.formData.password !== this.formData.confirmPassword) {
        errors.push({
          confirmPassword:
            "Entered Password is not the same as Confirm Password",
        });
      }

      // Validating Phone Number
      const numberWithoutSpace = this.formData.phone.replace(/\s+/g, "");
      if (isNaN(numberWithoutSpace) || numberWithoutSpace.length !== 11) {
        errors.push({ phone: "Please! Enter a Valid Phone Number" });
      }

      const localErrors = errors.filter((el) => el !== true);
      errors = [];

      this.errors = [];
      this.errors.push(...localErrors);

      if (localErrors.every((el) => el === true)) {
        console.log("Form Submitted Successfully");
      }
    },
  },
  components: {
    RegistrationForm,
  },
};
</script>

<style scoped>
.errors-container {
  margin-top: -0.1rem;
}
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
</style>
