module.exports = {
    root: true,
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 2017
    },
    plugins: [
        'bem-xjst'
    ],
    env: {
        browser: true,
        es6: true,
        node: true
    },
    globals: {
        '$': true,
    },
    rules: {
        'no-empty': [2, { allowEmptyCatch: true }],
        'array-bracket-spacing': [2, 'never'],
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        'camelcase': [2, { properties: 'never' }],
        'comma-dangle': [2, 'never'],
        'comma-spacing': [2, { before: false, after: true }],
        'comma-style': 2,
        'consistent-this': [1, 'self'],
        'eol-last': 2,
        'func-call-spacing': 2,
        'indent': [2, 4, { SwitchCase: 1 }],
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }],
        'keyword-spacing': 2,
        'linebreak-style': [2, 'unix'],
        'max-len': [2, {
            'code': 120,
            'tabWidth': 4,
            'ignoreUrls': true,
            'ignoreComments': false
        }],
        'new-cap': [2, { properties: false }],
        'no-lonely-if': 2,
        'no-multiple-empty-lines': 2,
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 2,
        'object-curly-spacing': [2, 'always'],
        'one-var-declaration-per-line': 2,
        'operator-linebreak': [2, 'after'],
        'quotes': [2, 'single'],
        'quote-props': [2, 'as-needed', { keywords: true }],
        'semi': [2, 'always'],
        'space-before-blocks': [2, 'always'],
        'space-infix-ops': 2,
        'space-in-parens': 2,
        'space-before-function-paren': [2, 'never'],

        // Best Practices
        'block-scoped-var': 2,
        'curly': [2, 'all'],
        'dot-location': [2, 'property'],
        'eqeqeq': 2,
        'no-else-return': 2,
        'no-extra-bind': 2,
        'no-implicit-coercion': 2,
        'array-callback-return': 2,
        'no-labels': 2,
        'no-multi-spaces': 2,
        'no-useless-call': 2,
        'wrap-iife': [2, 'inside'],
        'yoda': 2,

        // Variables
        'no-use-before-define': [2, { 'functions': false }]
    },
    overrides: [
        {
            files: ['*.bemhtml.js'],
            env: {
                'bem-xjst/bemhtml': true
            }
        },
        {
            files: ['*.bemtree.js'],
            env: {
                'bem-xjst/bemtree': true
            }
        },
        {
            files: ['*.test.js'],
            globals: {
                'describe': true,
                'beforeEach': true,
                'test': true,
                'expect': true
            },
        }
    ]
};
