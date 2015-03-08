module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['build'],
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'src/', src: ['**/*.!(jsx|md|json)'], dest: 'build/'}
				]
			}
		},
		browserify: {
			build: {
				files: {
					'build/main.js': ['src/main.jsx'],
					'build/components/helloworld/helloworld.js': ['src/components/helloworld/helloworld.jsx'],
				},
				options: {
					transform: [
	          [ 'reactify', {'es6': true} ]
	        ],
	        watch: true
				}
			}
		},
		shell: {
      server: {
        command: 'pushd build/; python -m SimpleHTTPServer; popd'
      }
    }
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['clean', 'copy', 'browserify', 'shell:server']);

};