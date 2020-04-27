<template>
  <div>
    <p v-lower-text="'HELLO atguigu'"></p>
    <p>
      clicked: {{ count }} times, count is
      {{ oddOrEven }}
    </p>
    <button @click="INCREMENT">+</button>
    <button @click="DECREMENT">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  mounted() {
    this.$vmMethod();
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["oddOrEven"]),
  },
  methods: {
    ...mapActions(["incrementIfOdd", "incrementAsync"]),
    ...mapMutations(["INCREMENT", "DECREMENT"]),
  },
};
</script>

<style></style>
