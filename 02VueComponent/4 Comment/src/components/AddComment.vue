<template>
  <div class="col-md-4">
    <form class="form-horizontal" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default pull-right">
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    addComment: Function,
  },
  data() {
    return {
      name: "",
      content: "",
    };
  },
  methods: {
    handleSubmit() {
      const name = this.name.trim();
      const content = this.content.trim();
      if (!name || !content) {
        alert("输入的评论不能为空~");
        return;
      }
      this.addComment({ id: Date.now(), name, content });
      this.name = this.content = "";
    },
  },
};
</script>

<style></style>
