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

router.get('/getManager', (req, res, next) => {
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

router.get('/login', (req, res, next) => {
    let resultArray = [];
    mongoose.connect(url, options, function (err, db) {
        assert.equal(null, err);
        let cursor = db.collection('Login').find();
        cursor.forEach((doc, err) => {
            assert.equal(null, err);
            resultArray.push(doc);
        }, () => {
            db.close();
            res.send(resultArray);
        });
    })
});

router.post('/register', (req, res, next) => {
    mongoose.connect(url, options, function (err, db) {
        assert.equal(null, err);
        let cursor = db.collection('Login');
        cursor.insertOne(req.body.body, (err, result) => {
            assert.equal(null, err);
            res.send(result["ops"][0]["_id"]);
            db.close();
        });
    })
});

router.post('/addManager', (req, res, next) => {
    mongoose.connect(url, options, function (err, db) {
        assert.equal(null, err);
        let cursor = db.collection('Manager');
        cursor.insertOne(req.body.body, (err, result) => {
            assert.equal(null, err);
            res.send(result["ops"][0]["_id"]);
            db.close();
        });
    })
});

router.post('/deleteManager', (req, res, next) => {
    mongoose.connect(url, options, function (err, db) {
        assert.equal(null, err);
        let cursor = db.collection('Manager');
        cursor.deleteOne({ _id:  mongoose.Types.ObjectId(req.body._id) }, (err, result) => {
            assert.equal(null, err);
            res.send(result);
            db.close();
        });
    })
});

router.post('/updateManager', (req, res, next) => {
    mongoose.connect(url, options, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        let _id = req.body._id;
        let set = {
            data: req.body.data
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