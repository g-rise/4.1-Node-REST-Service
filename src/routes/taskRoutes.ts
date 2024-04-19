import express from 'express'

import taskController from '../infrastructure/taskController'
// import TaskController1 from "../infrastructure/taskController1"
// import TaskList from "../application/task-service";

// const taskService = new TaskList()
// const taskContr = new TaskController1(taskService)





const router = express.Router()

router.post('/', taskController.addTask)
router.get('/', taskController.getTasks)
router.get('/:id', taskController.findTask)
router.patch('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)



export default router