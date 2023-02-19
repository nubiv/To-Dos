import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { TasksService } from 'src/app/services/tasks.service';
import { AuthService } from 'src/app/services/auth.service';
import { Task } from 'src/app/models';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import {
  loadTaskListInitiated,
  addNewTaskSubmitted,
  selectTaskList,
  deleteTaskSubmitted,
  editTaskSubmitted
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
  translatedTaskList: Task[] = [];
  onSpanish = false;

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

  onAddTask(taskContent: string) {
    if (taskContent) {
      const task: Task = {
        content: taskContent,
        status: 'TO DO'
      };

      this.store.dispatch(addNewTaskSubmitted({ task }));
      // this.tasksService.addNewTask(task).subscribe((result) => {
      //   window.alert("Task added successfully.");
      //   console.log(result);
      //   taskContent = "";
      // });
    }
  }

  onChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    const li = target.parentElement as HTMLLIElement;
    const taskId = parseInt(li.id);

    // this.tasksService.editTask(taskId).subscribe(() => {
    //   window.alert("Task updated.");
    // });
    // this.store.dispatch(editTaskSubmitted());
  }

  onDeleteTask(event: Event) {
    const target = event.target as HTMLButtonElement;
    const li = target.parentElement as HTMLLIElement;
    const taskId = parseInt(li.id);

    // this.tasksService.deleteTask(taskId).subscribe(() => {
    //   window.alert("Task deleted.");
    // });
    this.store.dispatch(deleteTaskSubmitted({ taskId }));
  }

  onSwitchToSP() {
    this.onSpanish = true;

    this.tasksService
      .getTaskList()
      .pipe(
        map((tasks: any) => {
          tasks.map((task: Task) =>
            this.translateService
              .translate(task.content)
              .subscribe((result) => (task.content = result))
          );

          return tasks;
        })
      )
      .subscribe(
        (translatedTasks) => (this.translatedTaskList = translatedTasks)
      );
  }

  onSwitchToEN() {
    this.onSpanish = false;
    this.translatedTaskList = [];
  }
}
