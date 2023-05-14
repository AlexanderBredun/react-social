import { ResolveOptions } from "webpack";

export default function BuildResolvers(): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
      }
}