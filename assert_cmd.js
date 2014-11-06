#!/usr/bin/env node

/*
*	filename: child_test.js
*	description: checks shell commands work
*	example: '... is python installed?'
*/

const
	fs = require('fs'),
	child = require('child_process'),
	test_command = process.argv[2] || "python -c 'import sys; print(sys.version_info >= (2,4))'"

child.exec(test_command, function(error,stdout,stderr) {
	console.log('command test: ' + test_command)
	var test = null
	if (error) {
		test = error.code
	} else {
		test = 0
	}

	function callback(){
		console.log(test)
		module.exports.test = test
	}
	return callback()
})



// /*Create 10 worker process*/
// for(var i=0; i<10; i++) {
// 	var worker = child.spawn('node', ['worker.js', i])
	
// 	worker.stdout.on('data', function (data) {
// 		console.log('stdout: ' + data)
// 	})
	
// 	worker.stderr.on('data', function (data) {
// 		console.log('stderr: ' + data)
// 	})
	
// 	worker.on('close', function (code) {
// 		console.log('child process exited with code ' + code)
// 	})
// }