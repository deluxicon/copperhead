#!/usr/bin/env node 


String.prototype.startswith = function(text) {
    return this.substr(0,text.length) == text
}

String.prototype.join = function(arr) {
    var full_string = ""
    var spacer = this.toString()
    arr.forEach(function(a){
        full_string += a + spacer
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

String.prototype.loop = function () {
    for (i in this) {
        console.log(this[i])
    }
}



String.prototype.trigram = function(str) {

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
