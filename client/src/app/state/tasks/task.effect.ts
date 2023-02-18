import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Task } from "src/app/models";
import { TasksService } from "src/app/services/tasks.service";

@Injectable()
export class TasksEffect {
  constructor(private actions$: Actions, private tasksService: TasksService) {}

  loadTaskList$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[To Do List Component] Load Task List Initiated"),
      mergeMap(() =>
        this.tasksService.getTaskList().pipe(
          map((data) => ({
            type: "[To Do List Component] Load Task List Success",
            payload: data
          })),
          catchError(() =>
            of({ type: "[To Do List Component] Load Task List Failed" })
          )
        )
      )
    )
  );

  addNewTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[To Do List Component] Add New Task Submitted"),
      mergeMap(({ task }) =>
        this.tasksService.addNewTask(task).pipe(
          map((task) => ({
            type: "[To Do List Component] Add New Task Success",
            payload: task
          })),
          catchError(() =>
            of({ type: "[To Do List Component] Add New Task Failed" })
          )
        )
      )
    )
  );

  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[To Do List Component] Edit Task Submitted"),
      mergeMap((task: Task) =>
        this.tasksService.editTask(task).pipe(
          map((task) => ({
            type: "[To Do List Component] Edit Task Success",
            payload: task
          })),
          catchError(() =>
            of({ type: "[To Do List Component] Edit Task Failed" })
          )
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[To Do List Component] Delete Task Submitted"),
      mergeMap((props: any) =>
        this.tasksService.deleteTask(props.taskId).pipe(
          map(() => ({
            type: "[To Do List Component] Delete Task Success",
            payload: props.taskId
          })),
          catchError(() =>
            of({ type: "[To Do List Component] Delete Task Failed" })
          )
        )
      )
    )
  );
}
