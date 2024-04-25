import Task from '#models/task'

export interface BaseRepository<T> {
  findById(id: any): Promise<T>
  find(): Promise<T[]>
  create(id: any, item: Partial<T>): Promise<T>
  update(id: any, item: Partial<T>): Promise<T>
  delete(id: any): Promise<T>
}

export interface PortTaskRepository extends BaseRepository<Task> {
  findByTitle(title: string): Promise<Task>
  findTasksByStatus(completed: boolean): Promise<Task[]>
}