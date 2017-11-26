
var sprintf       = require('sprintf-js').sprintf;
var Events        = require('events');
var ChildProcess  = require('child_process');
var Request       = require('yow/request');
var isString      = require('yow/is').isString;
var isFunction    = require('yow/is').isFunction;

function debug() {
};


module.exports = class API {

    constructor(options) {
        options = Object.assign({}, options);

        if (options.debug) {
            debug = isFunction(options.debug) ? options.debug : console.log;
        }

        if (options.id == undefined)
            throw new Error('ID must be spceified');

        this.id      = options.id;
        this.request = new Request('http://app-o.se', {debug:options.debug, headers:{'content-type': 'application/json'}});
    }


    run(command, params) {
        var options = {};
        options.path   = sprintf('/service/neopixels.%s/%s', this.id, command);
        options.body   = params;

        return this.request.post(options);
    }

    color(options) {
        return this.run('color', options);
    }

    blink(options) {
        return this.run('blink', options);
    }

    flash(options) {
        return this.run('flash', options);
    }

    random(options) {
        return this.run('random', options);

    }


}
