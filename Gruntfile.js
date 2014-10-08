

    module.exports = function(grunt) {
        var phantomjs  = require('phantomjs');
        var phantombin = phantomjs.path;

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            exec: {
                codecept: {
                    stdout: true,
                    command: [
                        '"./vendor/bin/codecept" clean',
                        '"./vendor/bin/codecept" run acceptance --debug'
                    ].join('&&')
                }
            },
            run: {
                phantomjs: {
                    options: {
                        wait: false,
                        quiet: true,
                        ready: /running on port/
                    },
                    cmd: phantombin,
                    args: [
                        '--webdriver=4444'
                    ]
                }
            },
            watch: {
            }
        });
        grunt.registerTask('default', []);

        grunt.loadNpmTasks('grunt-exec');
        grunt.loadNpmTasks('grunt-run');
        grunt.registerTask('test', ['run:phantomjs', 'exec:codecept', 'stop:phantomjs']);
    };

