/*jslint regexp: true, nomen: true, sloppy: true */
/*global require, applicationConfig, window, applicationConfig */
require.config({
    baseUrl: '/scripts/',
    paths: {
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min', // cdn
            '/libs/jquery-1.11.2.min' // fallback
        ],
        site: 'site'
    }
});
require(['jquery', 'site'], function ($, site) {
    var console = window.console || { log: $.noop, error: $.noop },
        maxData = [];
    if (typeof applicationConfig != 'undefined') {
        var config = applicationConfig;
    }
    if (typeof site != 'undefined') {
        site.init();
    }
});
