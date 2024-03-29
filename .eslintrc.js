module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'linebreak-style': ['warn', 'unix'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'no-unused-vars': 0,
        'no-console': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
