<template>
    <div>
        <div>Dimarx</div>
        <div>{{allProduct.data}}</div>
    </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
// import axios from 'axios';
export default {
  name: "Test",
 
  props: {
    msg: String
  },
   methods: {
    ...mapActions("Auth",["getAllProduct"]),

  },
  computed: {
    ...mapState("Auth", ["allProduct"]),
    // ...mapState(["products"]),
  },
  created () {
    this.getAllProduct()
  }
};
</script>