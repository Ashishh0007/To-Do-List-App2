const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller.js');

console.log('Router loaded.');

router.get('/', homeController.home);
router.post('/add', homeController.create_todo);
router.get('/delete-todo',homeController.delete_todo);
router.get('/update',homeController.updateForm);
router.post('/edit-todolist', homeController.updateToDoList);

module.exports = router;