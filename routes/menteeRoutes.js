// routes/itemRoutes.js
const express = require('express');
const menteeController = require('../controller/menteeController');
const cors = require('../middleware/cors');
const router = express.Router();
const authMiddleware = require('../middleware/auth');



router.use(cors);

//router.get('/', menteeController.getAllMentee);
router.post('/loginAuth', menteeController.loginMenteeAuth);
router.get('/all',authMiddleware,menteeController.getAllMentee);
router.post('/login', menteeController.loginMentee);
router.post('/register', menteeController.registerMentee);

router.get('/:id', menteeController.getMenteeById);
router.post('/', menteeController.createMentee);
router.put('/:id', menteeController.updateMentee);
router.delete('/:id', menteeController.deleteMentee);

module.exports = router;
