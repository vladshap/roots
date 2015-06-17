"use strict";

/*jslint regexp: true, nomen: true, sloppy: true */
/*global require, define, alert, applicationConfig, location, document, window,  setTimeout, Countable */

define(['jquery'], function ($) {
    var module = {};

    // Context is passed to modules. If you will pass it, module will bind to
    // exact area in DOM, if not it will bind on every selector


    module.onLoadThings = function () {
        $('html').addClass('animate');
    };

    module.init = function () {
        module.onLoadThings();
    };

    return module;
});