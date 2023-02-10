import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { TaskActionService } from 'src/app/services/task-action.service';
import { AuthService } from 'src/app/services/auth.service';
import { Task } from 'src/app/services/task';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  taskContent: string = '';
  taskList: Task[] = [];
  translatedTaskList: Task[] = [];
  onSpanish = false;

  constructor(
    public translateService: TranslateService,
    public authService: AuthService,
    public taskAction: TaskActionService
  ) { }

  ngOnInit(): void {
    this.onShow()
   }

  onShow() {
    this.taskAction.GetAllTasks().subscribe(docs => this.taskList = docs);
  }

  onChangeInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value: string = target.value;

    this.taskContent = value;
  }

  onAddTask() {
    if (this.taskContent) {
    const task = {
      content: this.taskContent,
      done: false
    }

    this.taskAction
    .CreateTask(task)
    .then((result) => {
      window.alert('Task added successfully.')
      this.taskContent = ''

      this.taskAction.AddUID(result.id)
      .catch((error) => {
        window.alert(error)
      })
    })
    .catch((error) => {
      window.alert(error)
    })
    }
  }

  onChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    const li = target.parentElement?.parentElement as HTMLLIElement;
    const taskUid = li.className

    this.taskAction
    .EditTask(taskUid)
    .then(() => {
      window.alert('Task updated.')
    })
    .catch((error) => {
      window.alert(error)
    })
  }

  onDeleteTask(event: Event) {
    const target = event.target as HTMLButtonElement;
    const li = target.parentElement as HTMLLIElement;
    const taskUid = li.className

    this.taskAction
    .DeleteTask(taskUid)
    .then(() => {
      window.alert('Task deleted.')
    })
    .catch((error) => {
      window.alert(error)
    })
  }

  onSwitchToSP() {
    this.onSpanish = true;

    this.taskAction
    .GetAllTasks()
    .pipe(
      map(tasks=> {
        tasks.map(task=> 
          this.translateService.translate(task.content).subscribe(result=> task.content=result))

        return tasks
      })
    )
    .subscribe(translatedTasks => this.translatedTaskList = translatedTasks)
  }

  onSwitchToEN() {
    this.onSpanish = false;
    this.translatedTaskList = [];
  }
}
