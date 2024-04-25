import { inject } from '@adonisjs/core'

inject()

export default class TaskService {
  constructor() {
    this.taskRepo = {}
  }

  async create(data) {
    return this.taskRepo.create(data)
  }

  async update(id, data) {
    return this.taskRepo.update(id, data)
  }

  async delete(id) {
    return this.taskRepo.delete(id)
  }

  async get(id) {
    return this.taskRepo.get(id)
  }
}
