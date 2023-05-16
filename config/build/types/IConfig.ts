export type Mode = "development" | "production";

export interface Paths{
    entry: string;
    output: string;
    template: string;
    src: string;
}

export interface EnvVars{
   mode: Mode
}

export interface ConfigOptions{
    mode: Mode;
    paths: Paths;
    isDev: boolean;
    port: number;
}