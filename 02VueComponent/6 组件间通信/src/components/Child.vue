<template>
  <div>
    <slot name="title"></slot>
    <div>
      <slot name="list" :persons="persons"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        { id: 1, name: "jack" },
        { id: 2, name: "rose" },
      ],
    };
  },
};
</script>

<style scoped></style>
