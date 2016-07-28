var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var vendor_config = {
    force: true,
    baseURL: './wwwroot',
    configPath: './wwwroot/config.js',
    bundles: {
        "src/vendor-build": {
            includes: [
                'aurelia-bootstrapper',
                'aurelia-dependency-injection',
                'aurelia-framework',
                'aurelia-templating-binding',
                'aurelia-templating-resources',
                'aurelia-loader-default',
                'aurelia-fetch-client',
                'aurelia-router',
                'aurelia-templating-router',
                'aurelia-history-browser',
                'aurelia-logging-console',
                'aurelia-event-aggregator'
            ],
            options: {
                inject: true,
                minify: true
            }
        }
    }
};

gulp.task('bundle-vendor', function () {
    return bundler.bundle(vendor_config);
});

gulp.task('unbundle-vendor', function () {
    return bundler.unbundle(vendor_config);
});