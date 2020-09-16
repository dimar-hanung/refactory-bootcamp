<template>
  <div class="mx-auto container">
    <form class="form" style="max-width:326px" @submit="sendRequest">
      <div class="login">Register</div>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="dataUser.username" name="username" id="username" type="text" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="dataUser.password" name="password" id="password" type="text" />
      </div>
      <div class="form-group">
        <label for="password">Full Name</label>
        <input
          v-model="dataUser.full_name"
          name="full_name"
          id="full_name"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="password">Phone Number</label>
        <input
          v-model="dataUser.phone_number"
          name="phone_number"
          id="phone_number"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="password">Email</label>
        <input v-model="dataUser.email" name="email" id="email" type="text" />
      </div>
      <input class="submit" type="submit" value="Register" />

      <router-link to="login" href="#" class="cancel">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import '@/assets/styles/form.css';
export default {
  name: "Register",
  data: () => ({
    dataUser: {
      username: "",
      password: "",
      full_name: "",
      phone_number: "",
      email: "",
    },
  }),
  created() {
    // this.reqLogin();
  },
  computed: {
    ...mapState("Auth", ["errorMessage"]),
  },
  methods: {
    ...mapActions("Auth", ["registerUser"]),
    sendRequest(e) {
      e.preventDefault();
      const error = [];
      if (this.username === "") {
        error.push("Username required");
      }
      if (this.password === "") {
        error.push("Password required");
      }

      if (error.length > 0) {
        alert(error.join(",\r\n"));
      } else {
        this.registerUser( this.dataUser);
      }
      return false;
    },
  },
};
</script>
