<template>
    <div>
        dahsboard
        <div>
            <tabel />
        </div>
    </div>
</template>

<script>
//@ is an alias to /src
import Tabel from "@/components/Table.vue";
import { mapState } from "vuex";
export default {
  name: "TabelView",
  components: {
    Tabel
  },
  computed: {
    ...mapState("Auth", ["user"]),
  },
};
</script>

<style scoped>

</style>