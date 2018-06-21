const notifier = require('node-notifier');


export function notifyer(info, level) {
    var infoLevel = level || 'Message'
    // String
    notifier.notify(infoLevel);
    notifier.notify(info)
}