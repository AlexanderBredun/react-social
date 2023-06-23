export type Mode = 'development' | 'production';

export interface Paths{
    entry: string;
    output: string;
    template: string;
    src: string;
}

export interface EnvVars{
   mode: Mode;
   apiUrl: string;
}

export interface ConfigOptions{
    mode: Mode;
    paths: Paths;
    isDev: boolean;
    apiUrl: string;
    project: 'frontend' | 'storybook' | 'jest';
    port: number;
}