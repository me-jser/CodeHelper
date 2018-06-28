const notifier = require('node-notifier');

// notifier.notify({
//     title: 'My notification',
//     message: 'Hello, there!'
//   });

module.exports = {
    msg: function (info) {
        notifier.notify(info)
    },
    error: function(info){
        notifier.notify(infoLevel);
    }
}