/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable linebreak-style */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';


export default {
	globals: {
		__IS_DEV__: true
	},
	clearMocks: true,
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
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
		'^@/(.*)': '<rootDir>src/$1',
		'axios': 'axios/dist/node/axios.cjs',
		'\\.(css|scss)$': 'identity-obj-proxy',
		
		
	}
	
};
