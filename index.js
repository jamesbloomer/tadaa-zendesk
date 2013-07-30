var buddha = require("buddha");

var tadaazendesk = {};

tadaazendesk.getValue = function(options, callback){
    buddha.setCredentials(options.host, options.email, options.password);
    return buddha.getTicketCount(options.view, callback);
};

module.exports = tadaazendesk;