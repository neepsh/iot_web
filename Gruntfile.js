module.exports = function (grunt) {
    grunt.initConfig({
        includereplace: {


            cwd: {
                src: ['src/*'],
                dest: 'dist/',
                expand: true,
                cwd: 'template'
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

    grunt.registerTask('default', ['includereplace'])
}