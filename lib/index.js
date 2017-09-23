'use strict';

var npmName = require('npm-name');

module.exports = function(str){

    npmName(str, function(err, available) {
        if (!available)
            console.log(str, 'is already published on npm repository');
        else
            console.log(str, 'is not yet published on npm repository');
    });
};
