
import { getUsers, getUserById, getLogin } from "../Controller/userController.js";
import express from 'express'
import { MongoClient } from 'mongodb'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getUsers)
router.route('/login').post(getLogin)

// express router method to create route for getting users by id
router.route('/:id').get(getUserById)
// const user = await User.findOne({ email: req.body.email });
// const password = await User.findOne({ password: req.body.password })
// if (user && password) {
//     res.send("User Exist")
// } else {
//     res.status(404).json({ message: "User not found" })
//     res.status(404)
//     throw new Error('User not found')
// }
router.route('/store').post((req, res) => {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        var db = client.db('Aspire-Click');
        const user = db.collection('users').findOne({ email: req.body.email });
        if (user) {
            res.send("User Already Exist")
        }
        else {
            db.collection('users').insertOne(req.body, (err, data) => {
                if (err) return console.log(err);
                res.send(('saved to db: ' + data));
            })
        }

    });
});


router.route('/update').post((req, res) => {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        var db = client.db('Aspire-Click');
        var myquery = { email: req.body.email };
        var newvalues = { $set: { password: req.body.password } };
        db.collection('users').updateOne(myquery, newvalues, (err, data) => {
            if (err) return console.log(err);
            res.send(('updated to db: ' + data));
        })
    });
})

export default router