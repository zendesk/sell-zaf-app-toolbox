module.exports = (env = []) => {
  return {
    entry: './src/index.tsx',
    output: {
      chunkFilename: '[name].bundle.js',
      filename: '[name].js',
      path: __dirname + '/dist',
      library: 'zap-app-utils',
      libraryTarget: 'umd',
    },

    mode: 'development',

    externals: ['react', 'react-dom'],

    // Enable sourcemaps for debugging webpack's output.
    devtool: env.development ? 'source-map' : false,

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    stats: {
      hash: false,
      modules: false,
      version: false,
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled/**/ by 'ts-loader'.
        {
          test: /\.tsx?$/,
          // tslint:disable-next-line:object-literal-sort-keys
          loader: 'ts-loader',
        },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: 'pre',
          test: /\.js$/,
          // tslint:disable-next-line:object-literal-sort-keys
          loader: 'source-map-loader',
        },
      ],
    },
  }
}
