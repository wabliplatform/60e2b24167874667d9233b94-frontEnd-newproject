const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'viewproject' : './javascript/viewproject.js',
	'createproject' : './javascript/createproject.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};