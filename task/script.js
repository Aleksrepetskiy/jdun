const { src, dest} = require('gulp');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
const path = require("../path.js")

const js = () => {
	return src (path.js.src, { sourcemaps: false})
	.pipe(babel())
	// .pipe(uglify())
	.pipe(dest(path.js.dist, { sourcemaps: false}))
}

module.exports = js;
