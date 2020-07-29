// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify'
import dts from 'rollup-plugin-dts'
import path from "path"

const name = 'jutils';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.cjs.js',
                format: 'cjs'
            },
            {
                file: 'dist/index.esm.js',
                format: 'es'
            },
            {
                file: 'dist/index.umd.js',
                format: 'umd',
                name,
                plugins: [uglify()]
            },
        ],
        plugins: [typescript({
            tsconfig: path.resolve(__dirname, "tsconfig.rollup.json")
        })]
    },
    {
        input: './typings/index.d.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es'
        },
        plugins: [dts()]
    }
]