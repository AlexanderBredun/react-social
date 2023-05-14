import { RuleSetRule } from "webpack";
import { ConfigOptions } from "./types/IConfig";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function BuildLoaders(options: ConfigOptions): RuleSetRule[] {

  const cssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: new RegExp(/\.module\./, 'gm'),
            localIdentName: options.isDev ? '[local]_[sha1:hash:hex:4]' : '[sha1:hash:hex:4]'
          },
        
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const tsLoader: RuleSetRule =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

    return [
      tsLoader,
      cssLoader
      ]
}