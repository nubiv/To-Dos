import { Pipe, PipeTransform } from '@angular/core';
import { STATUS, Task } from '../models';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(taskList: Task[], status: STATUS): Task[] {
    if (!taskList) return [];

    return taskList.filter((task) => task.status === status);
  }
}
