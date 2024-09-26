const path = require('path')

// path.resolve(), monta o path de acordo com sistema operacional podendo ser src/ ou src\ a depender do sistema operacional
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // diretorio, pasta, arquivo 
}