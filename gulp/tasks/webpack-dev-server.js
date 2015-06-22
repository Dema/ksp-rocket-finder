var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../webpack.config");


// modify some webpack config options
var myConfig = Object.create(webpackConfig);
myConfig.devtool = "source-map";
myConfig.debug = true;

var compiler = webpack(myConfig);

gulp.task("webpack-dev-server", function(callback) {

	// Start a webpack-dev-server
	new WebpackDevServer(compiler, {
		// proxy :{"*":"http://localhost:8080/"},
		stats: {
			colors: true
		}
	}).listen(9090, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[1webpack-dev-server]", "http://localhost:9090/webpack-dev-server/index.html");
	});
});
