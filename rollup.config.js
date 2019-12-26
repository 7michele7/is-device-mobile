import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
	input: './src/index.js',
	output: [
		{
			file: './dist/isMobile.js',
			format: 'umd',
			name: 'is-device-mobile',
			exports: 'named'
		},
		{
			file: './dist/isMobile.es.js',
			format: 'es',
			name: 'is-device-mobile',
			exports: 'named'
		}
	],
	plugins: [babel(), terser()]
};
