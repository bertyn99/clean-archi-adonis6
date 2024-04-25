import type { ApplicationService } from '@adonisjs/core/types'
import PortTaskRepository from '#repositories/interfaces/task_interface'
import TaskRepository from '#repositories/task'
import TaskService from '#services/task_service'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  async register() {
    await this.setupDependancyInjectionBindings()
  }
  async setupDependancyInjectionBindings() {
    this.app.container.bind(PortTaskRepository, () => this.app.container.make(TaskRepository))
  }

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
