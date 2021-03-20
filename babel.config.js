module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime:'automatic',
    }],
    '@babel/preset-typescript',
  ],
  
  plugins:[
    //plugin necessário para rodar styled-components
    "babel-plugin-styled-components",
    //plugin necessário para usar método async/await
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true,
      }
    ]
  ]
}