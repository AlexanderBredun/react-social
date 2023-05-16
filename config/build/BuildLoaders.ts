import { RuleSetRule } from "webpack";
import { ConfigOptions } from "./types/IConfig";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function BuildLoaders(options: ConfigOptions): RuleSetRule[] {

	const babelLoader: RuleSetRule =  {
		test: /\.(js|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"]
			}
		}
	};

	const svgLoader: RuleSetRule = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};

	const fileLoader: RuleSetRule = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

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
						auto: (resPath: string) => Boolean(resPath.includes(".module.")),
						localIdentName: options.isDev ? "[local]_[sha1:hash:hex:4]" : "[sha1:hash:hex:4]"
					},
        
				},
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	};

	const tsLoader: RuleSetRule =  {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		tsLoader,
		cssLoader
	];
}