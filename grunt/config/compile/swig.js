// Configuration for swig task(s)
// Compile swig templates into HTML
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('swig', {
    options: {
      data: {
        env: 'development'
      }
    },
    dist: {
      expand: true,
      cwd: '<%= yeogurt.server %>/templates/',
      dest: '<%= yeogurt.tmp %>/',
      src: ['*.swig'],
      ext: '.html'
    }
  });

};

module.exports = taskConfig;
