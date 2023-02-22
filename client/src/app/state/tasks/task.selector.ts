import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from 'src/app/models';

export const selectTaskList = createFeatureSelector<Task[]>('taskList');

export const selectTaskStatus = createSelector(
  selectTaskList,
  (taskList: Task[]) => taskList.map((task) => task.status)
);
