<template>
  <div class="home">
    <pre class="text-left">{{products}}</pre>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions(["loadItems"])
  },
  mounted () {
    this.loadItems();
  },
  computed: {
    ...mapState(["products"])
  },
};
</script>
