import express from 'express'
const app = express()
app.use(express.json()) //middleware que transforma req body en json

import taskRouter from './routes/taskRoutes'

const PORT = process.env.PORT || 3032


app.use('/tasks', taskRouter)



app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})