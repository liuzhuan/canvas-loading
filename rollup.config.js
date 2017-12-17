import babel from 'rollup-plugin-babel'

export default {
    input: 'src/main.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'umd',
            name: 'CanvasLoading'
        },
        {
            file: 'dist/bundle.es.js',
            format: 'es'
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}