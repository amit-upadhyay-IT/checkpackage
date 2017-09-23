#!/usr/bin/env node
'use strict';
var meow = require('meow');
var checkpackage = require('./');

var cli = meow({
    help: [
        'Usage',
        '  checkpackage <input>',
        '',
        'Example',
        '  checkpackage unicorn'
    ].join('\n');
});

checkpackage(cli.input[0]);
