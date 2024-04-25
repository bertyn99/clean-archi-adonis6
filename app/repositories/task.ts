import { PortTaskRepository } from '#repositories/ports/base_repository'

export class TaskRepository implements PortTaskRepository {
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
