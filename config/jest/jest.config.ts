/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable linebreak-style */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */


export default {
	
	coveragePathIgnorePatterns: [
	  '\\\\node_modules\\\\'
	],
	moduleDirectories: [
	  'node_modules'
	],
	moduleFileExtensions: [
	  'js',
	  'jsx',
	  'ts',
	  'tsx',
	  'json',
	  'node'
	],
	rootDir: '../../',
	testEnvironment: 'jsdom',
	
	testMatch:  [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
	],
	setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
	moduleNameMapper: {
		'^@/(.*)': '<rootDir>src/$1',
		'\\.(css|scss)$': 'identity-obj-proxy',
	}
	
};
