import Task from '#models/task'
import PortTaskRepository from '#repositories/interfaces/task_interface'

export default class TaskRepository implements PortTaskRepository {
  create(id: any, item: Partial<Task>): Promise<Task> {
    throw new Error('Method not implemented.')
  }
  update(id: any, item: Partial<Task>): Promise<Task> {
    throw new Error('Method not implemented.')
  }
  delete(id: any): Promise<Task> {
    throw new Error('Method not implemented.')
  }
  async findByTitle(title: string): Promise<Task> {
    throw new Error('Method not implemented.')
  }
  async findTasksByStatus(completed: boolean): Promise<Task[]> {
    return Task.findManyBy('isCompleted', completed)
  }
  async findById(id: any): Promise<Task | null> {
    return Task.find(id)
  }
  async find(): Promise<Task[]> {
    console.log('all mais ici')
    return await Task.all()
  }
}
