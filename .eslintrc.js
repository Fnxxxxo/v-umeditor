// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  globals: {
    UE: true,
    UM: true,
    $: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
      'global-require': 'off',
      'max-len': ['error', { code: 500 }],
      'no-param-reassign': 0,//禁止给参数重新赋值,
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      // 'no-underscore-dangle': ['off'],
      'prefer-const': ['error', { 'destructuring': 'all' }],
      'vue/name-property-casing': ['warn', 'kebab-case'],
      'vue/component-definition-name-casing': ['warn', 'kebab-case'],
    },
  }
}
