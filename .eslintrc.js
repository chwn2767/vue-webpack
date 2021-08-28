module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    //vue
    //Lv1 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    //Lv3'plugin:vue/vue3-recommended',

    //js
    'eslint: recommended',
  ],
  parseOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
