
module.exports = function (api) {
    api.cache(true);
    const presets = [];
    const plugins = [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator'
    ];
    if (process.env.NODE_ENV === 'test:unit') {
        plugins.push('@babel/plugin-transform-modules-commonjs');
    }
    return {
        presets,
        plugins
    };
};
