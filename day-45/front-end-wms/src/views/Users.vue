<template>
  <div class="container wrap">
     
    <div class="list-box">
        <select class="btn-lg" name="pagination" @input="changePage">
        <option selected disabled>Page {{$route.query.page}}</option>
        <option :value="index" v-for="index in users.totalPages" :key="index">Page {{index}}</option>
      </select>
        <div class="product flex" v-for="(user, id) in users.data" :key="id">
          <div class="detail-box">
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
    changePage(e){
      const val = e.target.value
      const qroute = this.$route.query;
      if(!qroute.limit) qroute.limit = 5
      this.$router.push(`/users?limit=${qroute.limit}&page=${val}`)
      this.getUsers(this.$route.query);
    }
  },
  computed: {
    ...mapState("Auth", ["users"]),
  },
  
  mounted() {
    this.getUsers(this.$route.query);
  },
};
</script>

<style scoped>
.wrap {
    @apply mx-auto mt-10 mb-10;
    height: max-content;
    min-height: 100%;
}
.detail-box {
  @apply py-2 px-3 my-2 w-full border-b border-green-300 bg-green-100;
}
</style>
