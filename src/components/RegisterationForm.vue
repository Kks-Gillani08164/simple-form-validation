<template>
  <form>
    <slot></slot>
    <button type="button" @click="onSubmit">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    submitMethod: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onSubmit() {
      this.submitMethod();
    },
  },
};
</script>
<style>
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
