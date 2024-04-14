var path = require('path');

exports.getCompiler = function () {
	return process.env.EDGE_CS_NATIVE || path.join(__dirname, 'edge-iron-py.dll');
};

exports.getBootstrapDependencyManifest = function() {
	return path.join(__dirname, 'edge-iron-py.deps.json');
}

