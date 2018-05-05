var requireDir = require('require-dir');

// Require all tasks defined within gulpfile.js/tasks, including any subfolders:
requireDir('./tasks', {
	recurse: true
});
