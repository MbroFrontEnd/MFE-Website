const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    indent: 0,
    semi: 0,
    'jsx-quotes': 0,
    'space-before-function-paren': 0,
    'react/prop-types': 1,
    'object-curly-spacing': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6'
    }
  }
}
