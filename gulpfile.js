const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const imagemin = require("imagemin")
const sourcemaps = require("gulp-sourcemaps")
const terser = require("gulp-terser")
const obfuscate = require("gulp-obfuscate")
const imageminMozjpeg = require('imagemin-mozjpeg');
const optipng = require("imagemin-optipng");

function compressJS(){
    return gulp.src("./src/JS/*.js")
        .pipe(terser())
        .pipe(obfuscate())
        .pipe(gulp.dest("./dist/JS"))
}

function compileSass(){
    return gulp.src("./src/SASS/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./dist/CSS"))
}

async function compressIMG(){
    try {
        await imagemin(["./src/IMAGES/*"],{
            destination: "./dist/IMAGES",
            plugins: [
                imageminMozjpeg(),
                optipng()
            ]
        })
        console.log("Optimized images")
    }
    catch(error){console.log(error)}
}

exports.js = compressJS;
exports.sass = compileSass;
exports.img = compressIMG;
