module.exports = {
  env: {
    node: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'script'
  },
  rules: {
    'no-console': 'off'
  }
}
