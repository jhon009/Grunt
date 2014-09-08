
module.exports=function(grunt){
     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          uglify:{
              options:{
               mangle:false,
               compress:{
                 drop_console:true
               }
     },
     js:{
     files:[{
               cwd:'public/js/src/',//rutadenuestrojavascriptfuente
               expand:true,//ingresaralassubcarpetas
               src:'*.js',//patrónrelativoacwd
               dest:'public/js/min/'//destinodelosarchivoscompresos
     }]
     }
     }
     
     });
	
     grunt.loadNpmTasks('grunt-contrib-uglify');

     grunt.registerTask('default', ['uglify']);

};