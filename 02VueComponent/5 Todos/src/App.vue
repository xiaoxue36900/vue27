<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :updateTodo="updateTodo" :delTodo="delTodo" />
      <Footer
        :todos="todos"
        :handleSelectAll="handleSelectAll"
        :delCompletedTodo="delCompletedTodo"
      />
    </div>
  </div>
</template>

<script>
import Header from "@comps/Header";
import List from "@comps/List";
import Footer from "@comps/Footer";

export default {
  data() {
    return {
      // 因为有可能没有值，没有就是null，不行
      todos: JSON.parse(window.localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    updateTodo(id, completed) {
      // find方法 里面函数返回值true就找到了并返回找到的元素，返回值false就没找到就会继续找
      const todo = this.todos.find((todo) => todo.id === id);
      todo.completed = completed;
    },
    addTodo(name) {
      this.todos.unshift({ id: Date.now(), name, completed: false });
    },
    delTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全选/全部选
    handleSelectAll(isSelectAll) {
      this.todos.forEach((todo) => {
        todo.completed = isSelectAll;
      });
    },
    // 删除已选中的todo数据
    delCompletedTodo() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(val) {
        window.localStorage.setItem("todos", JSON.stringify(val));
      },
    },
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
