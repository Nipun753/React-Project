import {getUsers,getUserById} from '../Controller/userController.js'
import express from 'express'
import {MongoClient} from 'mongodb'

const router = express.Router();

router.route('/').get(getUsers);

router.route('/store').post((req, res) => {
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  var db = client.db('Login');
  db.collection('users').insertOne(req.body, (err, data) => {
    if(err) return console.log(err);
    res.send(('saved to db: ' + data));
})
});
 });

 router.route('/update').post((req,res)=> {
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  var db = client.db('Login');
  var myquery = {email: req.body.email};
  var newvalues = { $set: { password:req.body.password } };
  db.collection('users').updateOne(myquery, newvalues, (err, data) => {
    if(err) return console.log(err);
    res.send(('updated to db: ' + data));
})
});
 })

router.route('/:id').get(getUserById)


export default router