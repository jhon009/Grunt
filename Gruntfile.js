
module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				mangle:false,
				compress:{
				drop_console:true
				}
			},
			js:{
				files:[{
					cwd:'public/js/src/',
					expand:true,
					src:'*.js',
					dest:'public/js/min/'
				}]
			}
		},
		less:{
			development:{
				options:{
					compress: false
				},
				files:{
					"public/css/style.css":"public/less/styles.less"
				}
			},
			production:{
				options:{
					compress:true
				},
				files:{
					"public/css/style.css":"public/less/styles.less"
				}
			}
		},
		watch:{
			jsuglify:{
				files:[
					'public/js/src/'
				],
				tasks:['jsmin'],
				options:{
					livereload: false
				}
			},
			less:{
				files:[
					'public/less/styles.less'
				],
				tasks:['lessdev'],
				options:{
					livereload: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('jsmin',['uglify']);

	grunt.registerTask('lessdev',['less']);

	grunt.registerTask('develop',['watch']);

};