const {babel} = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const ts = require('rollup-plugin-typescript2');
const path = require('path');

module.exports = {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        },
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.umd.js',
            name: '__lib__',
            format: 'umd',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        }),
        babel({
            include: 'src/**',
            babelHelpers: 'bundled',
        }),
    ],
};
