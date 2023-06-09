
import webpack from 'webpack';
import path from 'path';
import WebpackBuildConfig from './config/build/webpack.build.config';
import { EnvVars, Paths } from './config/build/types/IConfig';


export default (env: EnvVars)=> {
	const paths: Paths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		template: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};
  
	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	const apiUrl = env.apiUrl || 'http://localhost:8000';
	const project = 'frontend';
  
	const PORT = 1234;
  
	const config: webpack.Configuration = WebpackBuildConfig({
		paths,
		mode,
		isDev,
		apiUrl,
		project,
		port: PORT
	});

	return config;
};