const todo_model = require('../models/todo_model.js');

// home page function
module.exports.home = async function(req, res) {

    const todos = await todo_model.find();

    return res.status(200).render('home', {
        title: 'Todo List App',
        todo_list: todos
    });
}


// form data send function
module.exports.create_todo = async function(req, res) {

    const todolist = await todo_model.create({
        msg: req.body.msg,
        date: req.body.date,
        category: req.body.category
    });

    return res.status(200).redirect('back');
}


// delete function
module.exports.delete_todo = async function(req, res) {

    let id = req.query.id;
    await todo_model.findByIdAndDelete(id);
        
    return res.status(200).redirect('back');
}


// update function for editing a particular todo on edit page
module.exports.updateForm = async function(req, res) {

    let id = req.query.id;
    let todo = await todo_model.findById(id);

    return res.status(200).render('edit_page', {
        title: 'Edit TODO',
        todolist: todo
    });
}


// update function for the updated todos on home page
module.exports.updateToDoList = async function(req, res) {

    let id = req.query.id;
    await todo_model.updateOne({_id: id}, {$set: {
        msg: req.body.msg,
        date: req.body.date,
        category: req.body.category
    }});

    return res.redirect('/');
}