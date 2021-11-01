const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

interface envProps {
  mode?: string;
}

module.exports = (env: envProps) => {
  return {
    mode: env.mode,
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"), // where to bundle bundle.js
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".tsx", ".ts", "jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },

        {
          test: /\.s?css$/i,
          oneOf: [
            {
              test: /\.module\.s?css$/i,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: {
                    modules: true,
                  },
                },
                "sass-loader",
              ],
            },
            {
              use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
          ],
        },

        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name() {
                  if (env.mode === "development") {
                    return "[name].[ext]";
                  }
                  return "[contenthash].[ext]";
                },
                // 외부로 보일 img 테그에서 src 참조 디렉토리,
                // 사용한다면, Apache 서버에서 돌아가는 것을 염두하여 작성해야 함 --> 따라서 outpath와 동일하게 작성 필요
                publicPath: "media",
                // build 폴더 내에서 이미지 파일들이 생성될 디렉토리
                outputPath: "media",
              },
            },
          ],
        },

        {
          test: /\.(svg)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    devServer: {
      // devMiddleware: {
      //   publicPath: "/src/", // where to set the root directory, 하지만 실제로 해당 폴더에 output files를 만드는 것은 아니고, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path한다.
      // },
      static: path.resolve(__dirname, "build"), // webpack에서 제공하는 static files가 아닌 static files를 찾는 경로
      hot: true, // Hot Module Replacement (HMR)로 개발 중 변경된 부분이 자동으로 업데이트되는 기능
      historyApiFallback: true, // history api를 사용하여 SPA 개발시 404가 발생하면 index.html으로 리다이렉트
      compress: true,
      port: 4000,
      open: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css",
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: {
          files: ["./src/*.tsx", "./src/**/*.tsx"],
        },
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
        inject: false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
