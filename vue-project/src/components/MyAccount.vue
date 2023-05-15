<template>
    <div class="container text-center">
      <h2>My Account</h2>
      <form @submit="submitForm">
        <label class="my-2" for="blogName">Blog Name:</label>
        <input type="text" id="blogName" v-model="updatedUser.blogName">
        <br>
        <label class="my-2" for="address">Address:</label>
        <input type="text" id="address" v-model="updatedUser.address">
        <br>
        <label class="my-2" for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="updatedUser.firstName">
        <br>
        <label class="my-2" for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="updatedUser.lastName">
        <br>
        <label class="my-2" for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="updatedUser.phone">
        <br>
        <label class="my-2" for="description">Description:</label>
        <textarea id="description" v-model="updatedUser.description"></textarea>
        <br>
        <button  class="btn btn-primary px-4" type="submit">Save</button>
      </form>
    </div>
</template>


  <script>
  export default {
    props: ['user'],
    data() {
      return {
        updatedUser: { ...this.user }
      };
    },
    methods: {
      submitForm(event) {
        event.preventDefault();
        // Emit the updated user data to the parent component
        this.$emit('update-user', this.updatedUser);
      }
    }
  };
  </script>