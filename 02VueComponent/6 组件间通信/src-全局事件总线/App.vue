<template>
  <div>
    <h1>App组件...</h1>
    <ul>
      <li v-for="person in persons" :key="person.id">
        {{ person.name }}
      </li>
    </ul>
    
    <Child ref="child" />
  </div>
</template>

<script>
import Child from "@comps/Child";
/*
  需求：点击Child组件按钮，向父组件App传递person数据（子组件向父组件通信）
*/
export default {
  data() {
    return {
      persons: [{ id: 1, name: "jack" }],
    };
  },
  // 生命周期函数
  created() {
  },
  mounted() {
    // 通过原型链找到位于Vue原型对象上的vm，通过vm绑定事件
    this.$globalEventBus.$on("add-person", this.addPerson);
  },
  beforeDestory() {
    // 组件销毁之前，解绑自定义事件
    this.$globalEventBus.$off("add-person", this.addPerson);
  },
  methods: {
    addPerson(person) {
      this.persons.push(person);
    },
  },
  components: {
    Child,
  },
};
</script>

<style></style>
