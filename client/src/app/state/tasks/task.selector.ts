import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Task } from "src/app/models";

export const selectTaskList = createFeatureSelector<Task[]>("taskList");

export const selectTask = (props: { taskId: number }) =>
  createSelector(selectTaskList, (taskList: Task[]) =>
    taskList.find((task) => task.id === props.taskId)
  );
