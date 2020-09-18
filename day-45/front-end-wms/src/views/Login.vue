<template>
  <div class="mx-auto container">
    <form class="form" style="max-width:326px" @submit="sendRequest">
      <div class="login">Login</div>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" name="username" id="username" type="text" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" name="password" id="password" type="text" />
      </div>

      <input class="submit" type="submit" value="Sign In" />
      <div class="my-2 text-left">
        Belum punya akun?
        <router-link to="register" class="text-blue-500 font-bold"
          >Register</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import "@/assets/styles/form.css";
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
  }),
  created() {
    // this.reqLogin();
  },
  computed: {
    ...mapState("Auth", ["errorMessage"]),
  },
  methods: {
    ...mapActions("Auth", ["reqLogin"]),
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
        this.reqLogin({ username: this.username, password: this.password });
      }
      return false;
    },
  },
};
</script>
