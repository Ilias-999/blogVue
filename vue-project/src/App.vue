<template>
  <div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><h3>{{ user.blogName }}</h3></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/"><h4>Home</h4></router-link>
            <router-link class="mx-3" to="/MyAccount"><h4>My Account</h4></router-link>
            <router-link to="/GuestBook"><h4>Messages</h4></router-link>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <router-view :user="user" :messages="messages" @update-user="updateUser" @message-submitted="addMessage"></router-view>
    </div>
  </div>
  <div class="my-5 py-5"></div>
  <footer class="footer fixed-bottom bg-dark text-center text-white py-2">
    <h5>{{ user.description }}</h5>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      user: {
        blogName: 'My Blog',
        address: 'AP Formation',
        firstName: 'Ilias',
        lastName: 'OUANDOURI',
        phone: '07 00 11 22 33',
        description: 'Welcome to my blog!'
      },
      messages:[]
    };
  },
  methods: {
    updateUser(updatedUser) {
      this.user = { ...this.user, ...updatedUser };
    },
    addMessage(messageData) {
    this.messages.push(messageData);
    }
  }
};
</script>

