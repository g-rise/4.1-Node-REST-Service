import { Task } from "../domain/task";

export default class TaskList {
  tasks: Task[]

  constructor() {
    this.tasks = []
  }

  findTask(id: number): Task | undefined {
    const task = this.tasks.find(tsk => tsk.id === id)
    return task
  }

  addTask(description: string): Task {
    const ids: number[] = this.tasks.map(task => task.id)
    const maxId: number = ids.length !== 0 ? Math.max(...ids) : 0

    const newTask: Task = {
      id: maxId + 1,
      task: description,
      completed: false
    }
    this.tasks.push(newTask)
    return newTask
  }

  deleteTask(id: number): void {
    const task: Task | undefined = this.findTask(id)
    if (task !== undefined) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  }



  completeTask(id: number): Task | undefined {
    const task: Task | undefined = this.findTask(id)
    if (task !== undefined) {
      task.completed = !task.completed
      return task
    }
  }
}