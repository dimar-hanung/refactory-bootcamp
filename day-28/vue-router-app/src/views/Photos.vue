<template>
  <div class="about block mt-10">
    <!-- <h1>This is an about x</h1> -->
    <paginate class="flex flex-wrap" name="foto" :list="photos" :per="10" ref="foto">
      <div
        class="w-1/4 p-2 mx-auto"
        style="min-width:150px;"
        v-for="(photo, i) in paginated('foto')"
        :key="i"
      >
        <div class="text-left" style="max-width:min-content">
          <img
            style="min-width:150px"
            class="block mx-auto"
            :src="photo.thumbnailUrl"
            alt=""
          />

          <h1>{{ photo.title | capitalize }}</h1>
          <div>{{ photo.body }}</div>
          <router-link class="text-orange font-bold" :to="`photos/${photo.id}`"
            >Read More</router-link
          >
        </div>
      </div>
    </paginate>
    <div v-on:click="setPage">
      <paginate-links for="foto" :limit="10"></paginate-links>
    </div>
    <span v-if="$refs.paginator">
      Viewing {{ $refs.paginator.pageItemsCount }} results
    </span>
  </div>
</template>
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