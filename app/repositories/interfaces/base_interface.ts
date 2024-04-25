export default interface BaseRepository<T> {
  findById(id: any): Promise<T | null>
  find(): Promise<T[]>
  create(id: any, item: Partial<T>): Promise<T>
  update(id: any, item: Partial<T>): Promise<T>
  delete(id: any): Promise<T>
}
