/*
 * By @broofa, taken from here: http://stackoverflow.com/a/2117523
 */

function guid(n) {
    var n = n || 1;
    var guids = [];
    
    for (i = 0; i < n; i++) {
        guids.push('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        }));
    }
    
    return guids;
}