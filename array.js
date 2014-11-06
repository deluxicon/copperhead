#!/usr/bin/env node 

Array.prototype.append = Array.prototype.push

Array.prototype.choice = function () {
	var length = this.length-1
	var round = Math.round
	var random = Math.random
	var r = round(random()*length) 
	return this[r]	
}

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




function isArray(obj) {
    return Array.isArray(obj)
}