import { ConfigOptions } from "./types/IConfig";

import { Configuration as DevServerConfig } from 'webpack-dev-server'

export default function BuildDevServer(options: ConfigOptions):DevServerConfig {
    return {
        port: options.port,
        historyApiFallback: true
    }
}