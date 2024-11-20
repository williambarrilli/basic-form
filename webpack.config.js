module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
};
