// routes/itemRoutes.js
const express = require('express');
const menteeController = require('../controller/menteeController');
const cors = require('../middleware/cors');
const router = express.Router();
const authallmentee = require('../middleware/authallmentee');
const authmentee = require('../middleware/authmentee');
const upload = require('../middleware/upload');



router.use(cors);
//endpoint register
router.post('/register', menteeController.registerMentee);
//endpoint login
router.post('/login', menteeController.loginMentee);
router.post('/loginAuth', menteeController.loginMenteeAuth);
//endpoint logout
router.get('/logoutAuth',authallmentee, menteeController.logoutMenteeAuth);
//endpoint me (profile)
router.get('/me',authallmentee, menteeController.me);
//endpoint update me (profile)
router.put('/updateme', authallmentee,upload, menteeController.updateme);

router.get('/all',authallmentee,menteeController.getAllMentee);
router.get('/:id',authmentee, menteeController.getMenteeById);

router.post('/', menteeController.createMentee);
router.put('/:id', menteeController.updateMentee);
router.delete('/:id', menteeController.deleteMentee);
//router.get('/', menteeController.getAllMentee);

module.exports = router;
