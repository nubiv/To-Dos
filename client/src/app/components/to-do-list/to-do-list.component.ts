import { Component } from "@angular/core";
import { TranslateService } from "../../services/translate.service";
import { TaskActionService } from "src/app/services/task-action.service";
import { AuthService } from "src/app/services/auth.service";
import { Task } from "src/app/services/task";
import { map } from "rxjs/operators";
import { pipe } from "rxjs";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.css"]
})
export class ToDoListComponent {
  taskContent = "";
  taskList = [] as any;
  translatedTaskList: Task[] = [];
  onSpanish = false;

  constructor(
    public translateService: TranslateService,
    public authService: AuthService,
    public taskAction: TaskActionService
  ) {}

  ngOnInit(): void {
    this.onShow();
  }

  async test() {
    const token = await this.authService.GetToken();
    console.log(token);

    return token;
  }

  onShow() {
    // this.taskAction.GetAllTasks().subscribe((docs) => (this.taskList = docs));
    this.taskAction.GetAllTasks().subscribe((tasks) => {
      this.taskList = tasks;
      console.log(tasks);
    });
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
        status: "UNDONE"
      };

      this.taskAction.CreateTask(task).subscribe((result) => {
        window.alert("Task added successfully.");
        console.log(result);
        this.taskContent = "";
      });
    }
  }

  onChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    const li = target.parentElement?.parentElement as HTMLLIElement;
    const taskId = parseInt(li.className);

    this.taskAction.EditTask(taskId).subscribe(() => {
      window.alert("Task updated.");
    });
  }

  onDeleteTask(event: Event) {
    const target = event.target as HTMLButtonElement;
    const li = target.parentElement as HTMLLIElement;
    const taskId = parseInt(li.className);
    console.log(li);
    console.log(taskId);

    this.taskAction.DeleteTask(taskId).subscribe(() => {
      window.alert("Task deleted.");
    });
  }

  onSwitchToSP() {
    this.onSpanish = true;

    // this.taskAction
    //   .GetAllTasks()
    //   .pipe(
    //     map((tasks) => {
    //       tasks.map((task) =>
    //         this.translateService
    //           .translate(task.content)
    //           .subscribe((result) => (task.content = result))
    //       );

    //       return tasks;
    //     })
    //   )
    //   .subscribe(
    //     (translatedTasks) => (this.translatedTaskList = translatedTasks)
    //   );
  }

  onSwitchToEN() {
    this.onSpanish = false;
    this.translatedTaskList = [];
  }
}
