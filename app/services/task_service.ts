import { PortTaskRepository } from '#repositories/interfaces/base_repository'
import { inject } from '@adonisjs/core'

inject()
export default class TaskService {
  constructor(private taskRepo: PortTaskRepository) {}

  async update(id, data) {
    return this.taskRepo.update(id, data)
  }

  async delete(id) {
    return this.taskRepo.delete(id)
  }

  async getAll() {
    return this.taskRepo.find()
  }

  async getById(id) {
    return this.taskRepo.findById(id)
  }

  async getByTitle(title) {
    return this.taskRepo.findByTitle(title)
  }

  async getByStatus(status) {
    return this.taskRepo.findTasksByStatus(status)
  }
}
