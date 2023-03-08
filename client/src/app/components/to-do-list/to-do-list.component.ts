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
import { UsageService } from 'src/app/services/usage.service';

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
    public usageService: UsageService,
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

    // force page displaying updated task list, looking for more rational approach
    window.location.reload();
  }

  onDeleteTask(event: Event) {
    const target = event.target as HTMLSpanElement;
    const button = target.parentElement as HTMLButtonElement;
    const taskId = parseInt(button.id);

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

    this.usageService.countTranslate().subscribe({
      next: (data) => {
        console.log('Count translation usage + 1');
        console.log(data);
      },
      error: (err) => {
        console.log('Count translation usage failed.', err);
      }
    });
  }

  onSwitchToEN() {
    this.onSpanish = false;
  }
}
