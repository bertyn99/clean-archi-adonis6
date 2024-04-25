import Task from '#models/task'
import BaseRepository from './base_interface.js'

export default interface PortTaskRepository extends BaseRepository<Task> {
  findByTitle(title: string): Promise<Task | null>
  findTasksByStatus(completed: boolean): Promise<Task[]>
}
