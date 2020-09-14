<template>
  <div class="total-checkout">
    <table>
      <tr>
        <td>Sub Total</td>
        <td>: {{ subTotal | formatPrice }}</td>
      </tr>
      <tr>
        <td>PPN 10%</td>
        <td>: {{ ppn | formatPrice }}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>: {{ total | formatPrice }}</td>
      </tr>
    </table>

    <div></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      searchQuery: "",
      // items: null,
    };
  },
  methods: {
    ...mapActions(["loadItems"]),
  },
  mounted() {
    this.loadItems();
  },
  computed: {
    ...mapState(["items"]),
    selectedCarts() {
      return this.items.filter((item) => item.selected == true);
    },
    subTotal() {
      let total = 0;
      this.selectedCarts.forEach((item) => {
        total += item.price * item.total;
      });
      return total;
    },
    ppn() {
      return (this.subTotal * 10) / 100;
    },
    total() {
      return this.subTotal - this.ppn;
    },
  },
};
</script>

<style scoped></style>
