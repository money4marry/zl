module.exports = function (grunt) {
    //加载插件
    [
        'grunt-contrib-less',//编译less文件为css文件
        'grunt-contrib-csslint',//css文件合并，链接
        'grunt-contrib-concat',//文件合并
        'grunt-contrib-cssmin',//css压缩
        'grunt-contrib-imagemin',//图片压缩
        'grunt-contrib-jshint',//js语法检查
        'grunt-contrib-uglify',//js压缩
        'grunt-contrib-watch'//监控文件改变
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);
    });
    
    //配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //检查css语法
        csslint: {
            src: ['public/stylesheets/*.css']
        },
        //将Less文件编译成css文件
        less: {
            development: {//开发
                options: {
                    customFunctions: {
                        static: function (lessObject, name) {
                            return 'url("' + require('.b/static.js.js').map(name.value) + '")';
                        }
                    }
                },
                files: {
                    'public/stylesheets/main.css': 'less/main.less',//属性是css文件，值是less文件
                }
            }
        },
        //合并css文件
        concat: {
            css: {
                src: ['public/stylesheets/*.css'],
                /*根据目录下文件情况配置*/
                /* dest:'public/stylesheets/<%=pkg.name%>.css'*/
                dest: 'public/stylesheets/dist/<%=pkg.name%>.css'// dest目的，目标文件
                //解析一个变量，取变量的值      //<%=pkg.name%>这个表示项目名字
            }
        },
        //压缩css文件
        cssmin: {
            options: {
                //移除css文件中的所有注释
                keepSpecialComments: 0
            },
            minify: {
                expand: true,
                cwd: 'public/stylesheets/',
                src: ['<%= pkg.name %>.css'],
                dest: 'public/stylesheets/',
                ext: '.min.css'
            }
        },
        //优化图片大小
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'public/images',
                    src: ['**/*.{png,jpg,jpeg}'], //优化images目录下所有图片
                    dest: 'public/images/'//优化后的图片保存位置，默认覆盖
                }]
            }
        },
        //检查js语法
        jshint: {
            all: [
                'Gruntfile.js',
                'public/javascripts/*.js'
            ]
        },
        //最小化，混淆，合并JavaScript文件
        uglify: {
            build: {
                src: 'public/javascripts/*.js',
                dest: 'public/build/javascripts/<%pkg.name%>.min.js'
            }
        },
        //监控
        watch: {
            css: {
                files: 'public/stylesheets/*.css',
                tasks: ['csslint'/*,'concat','cssmin'*/],
                options: {
                    //livereload:true
                    spawn: false
                }
            },
            scripts: {
                files: 'public/javascripts/*.js',
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('static', ['csslint', 'imagemin', 'concat', 'cssmin', 'uglify', 'watch']);
    grunt.registerTask('less', ['less']);
};