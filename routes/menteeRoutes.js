// routes/itemRoutes.js
const express = require('express');
const menteeController = require('../controller/menteeController');
const cors = require('../middleware/cors');
const router = express.Router();




router.use(cors);

router.get('/', menteeController.getAllMentee);
router.get('/:id', menteeController.getMenteeById);
router.post('/', menteeController.createMentee);
router.put('/:id', menteeController.updateMentee);
router.delete('/:id', menteeController.deleteMentee);




module.exports = router;
