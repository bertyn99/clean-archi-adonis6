/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TasksController = () => import('#controllers/tasks_controller')
router.get('/', async () => {
  return { hello: 'world' }
})

//route for task
router.get('/tasks', [TasksController, 'index'])
router.get('/tasks/completed', [TasksController, 'getCompleted'])
