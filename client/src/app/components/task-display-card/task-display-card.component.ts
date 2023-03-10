import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-task-display-card',
  templateUrl: './task-display-card.component.html',
  styleUrls: ['./task-display-card.component.css']
})
export class TaskDisplayCardComponent {
  @Input() task: Task | undefined;
  @Input() onSpanish: boolean | undefined;
  @Input() statusOptions: string[] | undefined;
  @Output() editTaskEvent = new EventEmitter();
  @Output() deleteTaskEvent = new EventEmitter();

  onEditTask(e: MatSelectChange) {
    this.editTaskEvent.emit(e);
  }

  onDeleteTask(e: Event) {
    this.deleteTaskEvent.emit(e);
  }
}
