import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { TasksService } from 'src/app/services/tasks.service';
import { AuthService } from 'src/app/services/auth.service';
import { STATUS, Task } from 'src/app/models';
import {
  loadTaskListInitiated,
  addNewTaskSubmitted,
  selectTaskList,
  deleteTaskSubmitted,
  editTaskSubmitted,
  injectTranslatedContentInitiated
} from 'src/app/state/tasks';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  taskList$ = this.store.select(selectTaskList);
  taskList: Task[] = [];
  onSpanish = false;
  tranlatable = true;

  constructor(
    public translateService: TranslateService,
    public authService: AuthService,
    public tasksService: TasksService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadTaskListInitiated());
    this.taskList$.subscribe((state) => (this.taskList = state));
  }

  onAddTask(taskContent: string, taskStatus: STATUS) {
    if (!taskContent || !taskStatus) {
      window.alert('Please fill in the content or status.');
      return;
    }

    if (taskContent) {
      const task: Task = {
        content: taskContent,
        status: taskStatus
      };

      this.store.dispatch(addNewTaskSubmitted({ task }));
    }
  }

  onEditTask(event: any) {
    const target = event.source._elementRef.nativeElement as HTMLSelectElement;
    const taskId = parseInt(target.id);
    const status = event.value;

    const task = this.taskList.find((task) => task.id === taskId);
    if (!task) return;
    const updatedTask: Task = {
      id: task.id,
      content: task.content,
      status: status
    };

    this.store.dispatch(editTaskSubmitted({ task: updatedTask }));

    // really bad way to force page displaying updated task list...
    window.location.reload();
  }

  onDeleteTask(event: Event) {
    const target = event.target as HTMLButtonElement;
    const div = target.parentElement?.parentElement as HTMLDivElement;
    const taskId = parseInt(div.id);

    this.store.dispatch(deleteTaskSubmitted({ taskId }));
  }

  onSwitchToSP() {
    this.onSpanish = true;

    // only allow to translate the entire task list once
    if (this.tranlatable) {
      this.taskList.forEach((task: Task) => {
        this.store.dispatch(
          injectTranslatedContentInitiated({
            task: task
          })
        );
      });
      this.tranlatable = false;
    }
  }

  onSwitchToEN() {
    this.onSpanish = false;
  }
}
