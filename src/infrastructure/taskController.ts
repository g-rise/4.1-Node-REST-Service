
import { Request, Response } from 'express'
import TaskList from '../application/task-service'





const taskManager = new TaskList()

const taskController = {

    findTask(req: Request, res: Response) {
        const id = +(req.params.id)
        const thisTask = taskManager.findTask(id)
        if (!thisTask) {
            res.status(404).json("Asquesta tasca no existeix")
        }
        res.status(202).json(thisTask)
    },

    updateTask(req: Request, res: Response) {
        const id = +(req.params.id)
        const thisTask = taskManager.completeTask(id)
        if (!thisTask) {
            res.status(404).json("Asquesta tasca no existeix")
        }
        res.status(200).json(thisTask)
    },

    addTask(request: Request, response: Response) {
        // console.log('Request Body:', request.body)
        const { note }: { note: string } = request.body
        // console.log('Note:', note)
        const newTask = taskManager.addTask(note)
        // response.status(201).send(newTask)
        response.json(newTask);
    },

    deleteTask(req: Request, res: Response) {
        const id: number = +(req.params.id)
        if (taskManager.findTask(id) == undefined) {
            res.status(404).json("Asquesta tasca no existeix")
        } else {
            taskManager.deleteTask(id)
            res.status(200).json('Tasca eliminada correctament!')
        }
    },

    getTasks(_request: Request, response: Response) {
        response.json(taskManager.tasks)
    }

}

export default taskController
