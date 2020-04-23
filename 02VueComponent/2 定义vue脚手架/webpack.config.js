const path = require("path");
function resolve(relative) {
  // __dirname 代表当前文件所在的文件夹绝对路径
  // __dirname 其实就是项目根目录
  return path.resolve(__dirname, relative);
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: undefined,
    filename: "built.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve("src")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [],
          },
        },
      },
      {
        test: /\.css$/,
        include: [resolve("src")],
        use: [
          "style-loader",
          // 将css编译成js字符串，以commonjs规则插入到js文件中
          "css-loader",
        ],
      },
      {
        test: /\.(png|gif|jpe?g|webp)$/,
        include: [resolve("src")],
        use: {
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            /*
              对输出文件进行重命名
              [hash:10] hash（根据文件生成唯一id值）取10位
              [ext] 使用原来文件扩展名
            */
            name: "static/media/[hash:10].[ext]",
          },
        },
      },
    ],
  },
  plugins: [],

  mode: "development",
};
