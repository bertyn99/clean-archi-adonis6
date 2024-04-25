import Task from '#models/task'
import BaseRepository from './base_interface.js'

export default abstract class PortTaskRepository implements BaseRepository<Task> {
  abstract find(): Promise<Task[]>
  abstract create(id: any, item: Partial<Task>): Promise<Task>
  abstract update(id: any, item: Partial<Task>): Promise<Task>
  abstract delete(id: any): Promise<Task>
  abstract findById(id: any): Promise<Task | null>
  abstract findByTitle(title: string): Promise<Task | null>
  abstract findTasksByStatus(completed: boolean): Promise<Task[]>
}
