
module.exports = {
    rootDir: './',
    testRegex: './__tests__/.*\.spec\.js',
    collectCoverage: true,
    verbose: true,
    collectCoverageFrom: [
        '<rootDir>/src/*.js'
    ],
    globals: {}
};
