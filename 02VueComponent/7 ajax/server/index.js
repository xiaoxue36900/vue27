const express = require("express");
const app = express();
app.get("/search", function (req, res) {
  res.json({
    code: 10000,
    data: [
      { name: "vue", url: "https://github.com/vuejs/vue" },
      { name: "vue-resource", url: "https://github.com/pagekit/vue-resource" },
    ],
  });
});

app.get("/search/users", function (req, res) {
  res.json({
    items: [
      {
        login: "xpromise",
        html_url: "https://github.com/xpromise",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/30899542?s=460&u=6086b55c7b3643e56a1fe2fd9ebd51d3c3f5d495&v=4",
      },
      {
        login: "ruanyf",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
      },
      {
        login: "yyx990803",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
      },
      {
        login: "xpromise",
        html_url: "https://github.com/xpromise",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/30899542?s=460&u=6086b55c7b3643e56a1fe2fd9ebd51d3c3f5d495&v=4",
      },
      {
        login: "ruanyf",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
      },
      {
        login: "yyx990803",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
      },
      {
        login: "xpromise",
        html_url: "https://github.com/xpromise",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/30899542?s=460&u=6086b55c7b3643e56a1fe2fd9ebd51d3c3f5d495&v=4",
      },
      {
        login: "ruanyf",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
      },
      {
        login: "yyx990803",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
      },
    ],
  });
});

app.listen(3000, "localhost", (err) => {
  if (!err) console.log("服务器启动成功了，请访问 http://localhost:3000");
  else console.log(err);
});
