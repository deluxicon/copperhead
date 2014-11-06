#!/usr/bin/env node 


String.prototype.startswith = function(text) {
    return this.substr(0,text.length) == text
}

String.prototype.join = function(arr) {
    var full_string = ""

    arr.forEach(function(a){
        full_string += a + this
    })

    // bug: inserts global into text
    return full_string.trimRight()
}


String.prototype.count = function(substring){
		var count = 0
		var sub_len = substring.length
		for (var i = 0; i < this.length; i++) {
			count += ( this.substr(i,sub_len) == substring)? 1: 0
		}
		return count
	}


Array.prototype.append = Array.prototype.push

Array.prototype.choice = function () {
	var length = this.length-1
	var round = Math.round
	var random = Math.random
	var r = round(random()*length) 
	return this[r]	
}

var exports = module.exports = {
    cwd: process.cwd,
    chdir: function (path) {
        process.chdir(path)
        console.log(process.cwd())
        return
    },

    print: console.log,
    exit: function () { 
    	console.log('exiting node...')
    	return process.exit() 
    },

    range: range,
    random: Math.random,
    isInt: function (n){
        return typeof n== "number" && isFinite(n) && n%1===0;
    }





}



var range = function(start,end,step) {
	var range = []

	if (arguments.length == 0) throw TypeError("Must pass at least a one argument.")
	if (arguments.length == 1) {
		for (var i = start-1; i >= 0; i--) {
			range.push(i)
		}
		range = range.reverse()
	}

	if (arguments.length == 2) {
		for (var i = end-1; i >= start; i--) {
			range.push(i)
		}
		range = range.reverse()
	}

	if (arguments.length == 3) {
		var s = 1
		
		for (var i = start; i < end; i++) {
			if (s == 1) {
				s = step
				range.push(i)
			} else {
				s--
			}
		}
	}
	return range
}







// function python(file_path) {
//     var spawn = require('child_process').spawn,
//         py = spawn('python', [file_path]),
//         store = ''
//     py.stdout.on('data', function (data) { store += data })
//     py.stderr.on('data', function (data) { console.log('stderr: ' + data) })
//     py.on('close', function (code) { 
//         // buck = store 
//         console.log(store)
//         python = store
//     })
// }




if (typeof keys == 'undefined') {
    exports.keys = function (arr) {
        var k = []
        for (a in arr) k.push(a)
        return k
    }
}


if (typeof values == 'undefined') {
    exports.values = function (arr) {
        var v = []
        for (a in arr) v.push(arr[a])
        return v
    }
}




function isArray(obj) {
    return Array.isArray(obj)
}

Array.prototype.unique = function () {
    var o = {}

    for (var i = this.length - 1; i >= 0; i--) {
        if (o[this[i]]) {
            o[this[i]].count += 1            
        } else {
            o[this[i]] = {
                count: 1,
                type: typeof(this[i])
            }

        }
    }

    function setkeys(arr) {
        var k = []
        for (a in arr) {
            if (arr[a].type == 'number') {
                if (a.match(/\./gmi)) {
                    k.push(parseFloat(a))
                } else {
                    k.push(parseInt(a))    
                }  
            } else {
                k.push(a)    
            } 
        }
        return k
    }
    return setkeys(o)
}


String.prototype.loop = function () {
    for (i in this) {
        console.log(this[i])
    }
}

String.prototype.trigram = function(str) {
    
    Array.prototype.frequency = function () {
        var o = {}

        for (var i = this.length - 1; i >= 0; i--) {
            if (o[this[i]]) {
                o[this[i]] += 1            
            } else {
                o[this[i]] = 1            
            }
        }
        return o
    }


    function set(str) {  
        var s = str.split(' ')
        var o = {}

        for (var i = 0, g = s.length; i<g; i++) {
            // if (s[i+1] != undefined) {
            if (s[i+1]) {
                var k = s[i] + ' ' + s[i+1]
                if (o[k]) { 
                    o[k].push(s[i+2])
                } else {
                    o[k] = [s[i+2]]
                }
            }
        }
        return o
    }


    function predict(str) {
        var s = set(str)
    }
    return set(this)
}







(function init() {

    String.prototype.loop = function () {
        for (i in this) {
            console.log(this[i])
        }
    }

    // require('./nodecuts.js')
    // unpacks everything
    for (e in exports) {
    	global[e] = exports[e]
    }

})()
