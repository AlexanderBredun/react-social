import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export function getCssLoader(isDev: boolean): RuleSetRule{
	return {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev ? '[local]_[sha1:hash:hex:4]' : '[sha1:hash:hex:4]'
					},
        
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	};
}