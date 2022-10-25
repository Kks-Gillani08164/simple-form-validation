<template>
  <div></div>
</template>
<script>
export default {
  /* setup() {
    const formData = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      married: false,
      gender: null,
    };

    let errors = [];

    const required = (value) => {
      const keys = Object.keys(value);
      const result = keys.map((el) => {
        if (value[el] === "" || value[el] === null || value[el] === undefined) {
          return `${el} Field is Required`;
        }
        return true;
      });

      return result;
    };

    const validName = (firstName, lastName) => {
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
    };

    const validEmail = (value) => {
      let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (value.match(regex)) return true;
      return "Please! Enter a Valid Email Address";
    };

    const validPassword = (password, passwordConfirm) => {
      if (password.length < 3) {
        return "Password must be at least 4 Character Long";
      }
      if (password !== passwordConfirm) {
        return "Entered Password is not the same as Confirm Password";
      }
      return true;
    };

    const validPhone = (phoneNumber) => {
      const numberWithoutSpace = phoneNumber.replace(/\s+/g, "");
      if (isNaN(numberWithoutSpace) || numberWithoutSpace.length !== 11) {
        return "Please! Enter a Valid Phone Number";
      }
      return true;
    };

    function onSubmit() {
      const providedInputs = required(formData);
      const checkName = validName(formData.firstName, formData.lastName);
      const emailCheck = validEmail(formData.email);
      const checkPassword = validPassword(
        formData.password,
        formData.confirmPassword
      );
      const checkPhone = validPhone(formData.phone);

      errors.push(
        ...[
          ...providedInputs,
          checkName,
          emailCheck,
          checkPassword,
          checkPhone,
        ].filter((el) => el !== true)
      );

      console.log(errors);
      console.log(errors.every((el) => el === true));

      if (errors.every((el) => el === true)) {
        console.log(formData);
      }
    }

    return {
      onSubmit,
      formData,
      errors,
    };
  }, */
};
</script>

<style lang="scss" scoped></style>
