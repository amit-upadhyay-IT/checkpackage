#!/usr/bin/env node
'use strict';
var meow = require('meow');
var checkpackage = require('./lib/index.js');

var cli = meow({
    help: [
        'Usage',
        '  checkpackage <module name>',
        '',
        'Example',
        '  checkpackage unicorn',
        '',
        'Developer',
        '  Amit Upadhyay (github.com/amit-upadhyay-it)'
    ].join('\n')
});

console.log('Searching ...');
checkpackage(cli.input[0]);
