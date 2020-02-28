const express = require('express');
const router = express.Router();
const assert = require('assert');
const mongoose = require('mongoose');
const url = 'mongodb+srv://yash:yash1995@snakeandladder-4nxaa.gcp.mongodb.net/Todo?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10000, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
// const client = new MongoClient(url, options);
router.get('/', (req, res, next) => {
    let resultArray = [];
    mongoose.connect(url, options, function (err, db) {
        assert.equal(null, err);
        let cursor = db.collection('Manager').find();
        cursor.forEach((doc, err) => {
            assert.equal(null, err);
            resultArray.push(doc);
        }, () => {
            db.close();
            res.send(resultArray);
        });
    })
});

router.post('/add', () => {
    mongoose.connect(url, options, function (err, db) {
        assert.equal(null, err);
        let cursor = db.collection('Manager');
        cursor.insertOne(req.body.body, (err, result) => {
            assert.equal(null, err);
            res.send('insert');
            db.close();
        });
    })
});

router.post('/delete', (req, res, next) => {
    mongoose.connect(url, options, function (err, db) {
        assert.equal(null, err);
        let _id = req.body.body;
        console.log(req.body.body);
        let cursor = db.collection('Manager');
        cursor.deleteOne({ _id }, (err, result) => {
            assert.equal(null, err);
            res.send('delete');
            db.close();
        });
    })
});

router.post('/update', (req, res, next) => {
    mongoose.connect(url, options, function (err, db) {
        assert.equal(null, err);
        let _id = req.body.body._id;
        let set = {
            data: req.body.body.data
        };
        let cursor = db.collection('Manager');
        cursor.updateOne({ _id }, { $set: set }, (err, result) => {
            assert.equal(null, err);
            res.send('update');
            db.close();
        });
    })
});

module.exports = router;