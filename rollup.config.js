import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
export default [
    {
        input: 'src/index.js',
        output: {
            format: 'cjs',
            file: 'dist/cfw-parser.js'
        },
        plugins: [commonjs(), babel({
            exclude: ['node_modules/**']
        })]
    },
]
