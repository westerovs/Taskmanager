const path = require(`path`);

module.exports = {
  mode: `development`, // Режим сборки
  entry: `./src/main.js`, // Точка входа приложения
  output: { // Настройка точка выхода
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devtool: `source-map`, // подключаем sourcemaps
  devServer: {
    contentBase: path.join(__dirname, `public`), // Где искать сборку
    compress: true, // Сжатие
    // Автоматическая перезагрузка страницы
    // Если не работает по стандартному URLу в браузере ‘http://localhost:8080’,
    // то добавьте к нему ‘/webpack-dev-server/‘: ‘http://localhost:8080/webpack-dev-server/'
    watchContentBase: true,
  }
};
