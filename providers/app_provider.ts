import type { ApplicationService } from '@adonisjs/core/types'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  async register() {
    await this.setupDependancyInjectionBindings()
  }
  async setupDependancyInjectionBindings() {
    const PortTaskRepository = await import('#repositories/interfaces/task_interface')
    const TaskService = await import('#services/task_service')
    this.app.container.bind(PortTaskRepository, () => this.app.container.make(TaskService))
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
