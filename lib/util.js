'use strict';

const deepTraverse = function(obj, func) {
    for (let i in obj) {
        func.apply(this, [i, obj[i], obj]);  
        if (obj[i] !== null && typeof(obj[i]) == 'object') {
            deepTraverse(obj[i], func);
        }
    }
};

var fs = {
    stat: () => {
        // STUB
    },
    unlink: () => {
        // STUB
    }
};

try {
    fs = require('fs');
} catch (e) {
    // FS is not supported in this environment
}

exports.deepTraverse = deepTraverse;
exports.fs = fs;