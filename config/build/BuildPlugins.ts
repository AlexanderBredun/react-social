import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
import { ConfigOptions } from './types/IConfig';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default function BuildPlugins(options: ConfigOptions):webpack.WebpackPluginInstance[] {
	const plugins = [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: options.paths.template
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: options.isDev
		}),
	];

	if(options.isDev){
		plugins.push(new ReactRefreshWebpackPlugin());
		plugins.push(new BundleAnalyzerPlugin({
			openAnalyzer: false
		}));
	}
	return plugins;
}