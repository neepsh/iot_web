module.exports = function (grunt) {
    grunt.initConfig({
        includereplace: {


           /* cwd: {
                src: ['web/!*'],
                dest: 'dist/',
                expand: true,
                cwd: 'src'
            },*/
            multisrcdest: {

                files: [
                    {src: '**/*.js', dest: 'dist/js', expand: true, cwd: 'src/js'},
                    {src: '**/*.html', dest: 'dist/web', expand: true, cwd: 'src/web'},
                    {src: '**/*.html', dest: 'dist/h5', expand: true, cwd: 'src/h5'},
                    {src: '**/*.css', dest: 'dist/css', expand: true, cwd: 'src/css'}

                ]
            }

        },
        nodeunit: {
            files: ['test/*.js']
        },

        clean: {
            dist: 'dist/'
        }
    })

    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-nodeunit')
    grunt.loadTasks('tasks')

    grunt.registerTask('default', [ 'includereplace'])
}