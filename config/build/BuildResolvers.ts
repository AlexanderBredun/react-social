import { ResolveOptions } from "webpack";
import { ConfigOptions } from "./types/IConfig";


export default function BuildResolvers(options: ConfigOptions): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {
          '@': options.paths.src
        }
      }
}