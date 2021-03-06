"use strict";

var path = require("path");
var gulp = require("gulp");
var conf = require("./conf");

var karma = require("karma");

var pathSrcHtml = [
    path.join(conf.paths.src, "/**/*.html")
];

var pathSrcJs = [
    path.join(conf.paths.src, "/**/!(*.spec).js")
];

function runTests(singleRun, done) {

    var reporters = ["progress"];
    var preprocessors = {};
    var localConfig;
    var server;

    pathSrcHtml.forEach(function(srcPath) {

        preprocessors[srcPath] = ["ng-html2js"];

    });

    if (singleRun) {

        pathSrcJs.forEach(function(srcPath) {

            preprocessors[srcPath] = ["coverage"];

        });

        reporters.push("coverage");

    }

    localConfig = {
        configFile: path.join(__dirname, "/../karma.conf.js"),
        singleRun: singleRun,
        autoWatch: !singleRun,
        reporters: reporters,
        preprocessors: preprocessors
    };

    server = new karma.Server(localConfig, function(failCount) {

        done(failCount ? new Error("Failed " + failCount + " tests.") : null);

    });
    server.start();

}

gulp.task("test", ["scripts"], function(done) {

    runTests(true, done);

});

gulp.task("test:auto", ["watch"], function(done) {

    runTests(false, done);

});
