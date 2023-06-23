declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare const __IS_DEV__: boolean;
declare const __API_BASE_URL__: string;
declare const __PROJECT__: 'frontend' | 'jest' | 'storybook';

declare class Greeter {
	constructor(customGreeting?: string);
	greet: void;
	addMessages: (locale: string, messages: Record<string, string>)=> void;
}


declare module 'pristinejs'{
 
  const content: Pristine;

  export default content;
  
  
}

interface PristineConfig{
  classTo: string,
  errorClass: string,
  successClass: string,
  errorTextParent: string,
  errorTextTag: string,
  errorTextClass: string 
}

interface PristineError{
  errors: string[];
  input: HTMLInputElement
}

interface PristineInstance{
  reset: ()=> void;
  validate: ()=> void;
  getErrors: ()=> PristineError[];
}

interface Pristine {
  new (form: HTMLFormElement, config?: PristineConfig, live?: boolean ): PristineInstance;
  addMessages: (locale: string, messages: Record<string, string>)=> void
  setLocale: (locale: string)=> void
  
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }