// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

const production = process.env.NODE_ENV === 'production'

export default withNuxt({
    // add your custom rules here (https://eslint.org/docs/rules/)
    rules: {
        'arrow-parens': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-style': ['error', 'last'],
        curly: 'error',
        eqeqeq: ['warn', 'always'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'new-parens': 'error',
        'no-console': production
            ? ['error', { allow: ['warn', 'info', 'error'] }]
            : ['warn', { allow: ['warn', 'info', 'error'] }],
        'no-const-assign': 'error',
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'no-unused-vars': ['error', { args: 'none' }],
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'require-await': 'off',
        semi: ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        strict: ['error', 'never'],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 0,
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/no-v-html': 'off',
        'vue/script-indent': ['error', 4, { baseIndent: 0, switchCase: 1 }],
    },
})
