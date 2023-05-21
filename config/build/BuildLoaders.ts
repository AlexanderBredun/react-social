import { RuleSetRule } from 'webpack';
import { ConfigOptions } from './types/IConfig';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getCssLoader } from './helpers/getCssLoader';

export default function BuildLoaders(options: ConfigOptions): RuleSetRule[] {

	const babelLoader: RuleSetRule =  {
		test: /\.(js|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
		}
	};

	const svgLoader: RuleSetRule = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader: RuleSetRule = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const cssLoader: RuleSetRule = getCssLoader(options.isDev)

	const tsLoader: RuleSetRule =  {
		test: /\.tsx?$/,
		use: 'ts-loader',
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