<template>
  <div>
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "今天天气很好",
    };
  },
};
</script>

<style scoped>
.title {
  color: blue;
}
</style>
