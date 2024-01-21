import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(public taskRepo: TasksRepository) {}

  findAll() {
    return this.taskRepo.findAll();
  }

  findOne(id: number) {
    return this.taskRepo.findOne(id);
  }

  create(task: string) {
    return this.taskRepo.create(task);
  }
}
