<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <HelloWorld />
    <HelloWorld></HelloWorld>
    <hello-world></hello-world>
    <hello-world />

    <Hello />
    <img class="logo" src="./assets/images/logo.png" alt="logo" />
  </div>
</template>

<script>
import HelloWorld from "@comps/HelloWorld";
export default {
  data() {
    return {
      title: "暖暖喜欢钢炮~",
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.title {
  color: pink;
}
.logo {
  display: block;
  width: 500px;
  height: 500px;
}
</style>
