const mongooose = require('mongoose');

mongooose.connect('mongodb://admin:admin123@ds255539.mlab.com:55539/workdb', (err) => {
    if(!err) {
        console.log('MongoDB connection succeeded.');
    }
    else {
        console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
    }
});
module.exports = mongooose;