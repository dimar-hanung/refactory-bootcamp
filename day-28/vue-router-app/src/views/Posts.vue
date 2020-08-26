<template>
  <div class="about mt-10">
    <!-- <h1>This is an about x</h1> -->
    <paginate name="postingan" :list="posts" :per="10" ref="postingan">
      <div v-for="(post, i) in paginated('postingan')" :key="i">
        <div class="flex text-left">
          <img src="../assets/logo.png" alt="" />
          <div class="block mx-5">
            <h1 class="font-bold">{{ post.title | capitalize }}</h1>
            <div>
              {{ post.body }}
            </div>
            <router-link class="text-orange font-bold" :to="`posts/${post.id}`"
              >Read More</router-link
            >
          </div>
        </div>
      </div>
    </paginate>
    <div v-on:click="setPage">
      <paginate-links for="postingan" :limit="10"></paginate-links>
    </div>
    <span v-if="$refs.paginator">
      Viewing {{ $refs.paginator.pageItemsCount }} results
    </span>
  </div>
</template>
<style>
ul.paginate-links {
  @apply flex mx-2;
}

ul.paginate-links > li.number > a {
  @apply p-2 rounded mx-1 bg-green-500;
  cursor: pointer;
}
ul.paginate-links > li.active > a {
  @apply shadow bg-green-200;
}
</style>
<script>
export default {
  name: "Home",
  data() {
    return {
      post: [],
    };
  },
  methods: {
    setPage() {
      console.log(this.$refs.postingan.currentPage);
      const params = new URLSearchParams(location.search);
      params.set("page", this.$refs.postingan.currentPage+1);

      params.toString();
      window.history.replaceState(
        {},
        "",
        `${location.pathname}?${params.toString()}`
      );
    },
  },
  async created() {
    await console.log(this.$route.query.page);
    if (this.$refs.postingan ** this.$route.query.page) {
      this.$refs.postingan.goToPage(parseInt(this.$route.query.page));
    }
  },
};
</script>
