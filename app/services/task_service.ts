import PortTaskRepository from '#repositories/interfaces/task_interface'
import { inject } from '@adonisjs/core'

@inject()
export default class TaskService {
  constructor(private taskRepo: PortTaskRepository) {}

  async update(id, data) {
    return this.taskRepo.update(id, data)
  }

  async delete(id) {
    return this.taskRepo.delete(id)
  }

  async getAll() {
    console.log('all')
    return this.taskRepo.find()
  }

  async getById(id) {
    return this.taskRepo.findById(id)
  }

  async getByTitle(title) {
    return this.taskRepo.findByTitle(title)
  }

  async getByStatus(status) {
    console.log('status', status)
    return this.taskRepo.findTasksByStatus(status)
  }
}
