
module.exports = {
    parser: 'babel-eslint',
    extends: [
        '@ecomfe/eslint-config'
    ],
    parserOptions: {
        babelOptions: {
            configFile: './babel.config.js'
        }
    },
    rules: {
        'comma-dangle': ['error', {
            objects: 'never'
        }]
    },
    overrides: [
        {
            files: [
                '**/*.spec.js'
            ],
            env: {
                jest: true
            }
        }
    ]
};
