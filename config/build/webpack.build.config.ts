import path from "path";
import { Configuration } from "webpack";
import BuildLoaders from "./BuildLoaders";
import BuildPlugins from "./BuildPlugins";
import BuildResolvers from "./BuildResolvers";
import { ConfigOptions } from "./types/IConfig";
import BuildDevServer from "./BuildDevServer";

export default function WebpackBuildConfig(options: ConfigOptions): Configuration{

    const {mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
          path: paths.output,
          filename: '[name].[contenthash].js',
          clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? BuildDevServer(options) : undefined,
        plugins: BuildPlugins(options),
        module: {
          rules: BuildLoaders(options),
        },
        resolve: BuildResolvers(options),
    }
}