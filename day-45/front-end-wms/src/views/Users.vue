<template>
  <div class="container wrap">
    <div class="list-box">
        <div class="product flex" v-for="(user, id) in users.data" :key="id">
          <div class="detail-box">
            <hr />
            <table>
              <tr>
                <td><font-awesome-icon :icon="['fas', 'user']" /> Full Name</td>
                <td>: {{ user.full_name }}</td>
              </tr>
              <tr>
                <td><font-awesome-icon class="text-blue-600" 
                :icon="['fas', 'at']" /> Username</td>
                <td>: {{ user.username }}</td>
              </tr>
              <tr>
                <td>
                  <font-awesome-icon
                    class="text-blue-600"
                    :icon="['fas', 'envelope']"
                  />
                  Email
                </td>
                <td>: {{ user.email }}</td>
              </tr>
              <tr>
                <td><font-awesome-icon class="text-yellow-600" 
                :icon="['fas', 'phone']" /> Phone Number</td>
                <td>: {{ user.phone_number }}</td>
              </tr>
              <tr>
                <td><font-awesome-icon :icon="['fas', 'user']" /> Role</td>
                <td>: {{ user.role }}</td>
              </tr>
            </table>
          </div>
        </div>
    </div>

    <!-- {{users}} -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("Auth", ["getUsers"]),
  },
  computed: {
    ...mapState("Auth", ["users"]),
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style scoped>
.wrap {
    @apply mx-auto mt-10 mb-10;
    height: max-content;
    min-height: 100%;
}
.product {
  @apply py-2 px-3 my-2 border-b border-green-300 bg-green-100;
}
</style>
