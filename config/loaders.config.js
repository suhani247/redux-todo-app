module.exports=[
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      { test: /\.css/,
          loaders: ['style-loader','css-loader']
        
      }
]