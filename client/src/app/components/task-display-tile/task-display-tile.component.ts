import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { STATUS, Task } from 'src/app/models';

@Component({
  selector: 'app-task-display-tile',
  templateUrl: './task-display-tile.component.html',
  styleUrls: ['./task-display-tile.component.css']
})
export class TaskDisplayTileComponent {
  @Input() onSpanish: boolean | undefined;
  @Input() taskList: Task[] = [];
  @Input() tileTitle: STATUS | undefined;
  @Input() tileFilter: STATUS | undefined;
  @Input() tileStatusOptions: string[] | undefined;
  @Output() editTaskEvent = new EventEmitter();
  @Output() deleteTaskEvent = new EventEmitter();
  statusOptions = {
    toDo: ['IN PROGRESS', 'DONE'],
    inProgress: ['TO DO', 'DONE'],
    done: ['TO DO', 'IN PROGRESS']
  };

  onEditTask(e: MatSelectChange) {
    this.editTaskEvent.emit(e);
  }

  onDeleteTask(e: Event) {
    this.deleteTaskEvent.emit(e);
  }
}
