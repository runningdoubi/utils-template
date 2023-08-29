module.exports = {
    root: true,
    globals: {},
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
    },
    ignorePatterns: ['components.d.ts'],
    extends: [
        '@ecomfe/eslint-config',
    ],
    rules: {
        'no-unused-vars': 'error',
        'babel/new-cap': 0,
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: ['./tsconfig.json', './tsconfig.node.json'],
            },
            rules: {
                '@typescript-eslint/member-delimiter-style': [
                    'error',
                    {
                        'singleline': {
                            'delimiter': 'semi',
                        },
                    },
                ],
            },
            extends: [
                '@ecomfe/eslint-config/typescript',
            ],
        },
    ],
};
