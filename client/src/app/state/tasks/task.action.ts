import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models';

export const loadTaskListInitiated = createAction(
  '[To Do List Component] Load Task List Initiated'
);

export const loadTaskListSuccess = createAction(
  '[To Do List Component] Load Task List Success',
  props<{ taskList: Task[]; payload: Task[] }>()
);

export const loadTaskListFailed = createAction(
  '[To Do List Component] Load Task List Failed',
  props<{ err: Error }>()
);

export const addNewTaskSubmitted = createAction(
  '[To Do List Component] Add New Task Submitted',
  props<{ task: Task }>()
);

export const addNewTaskSuccess = createAction(
  '[To Do List Component] Add New Task Success',
  props<{ task: Task; payload: Task }>()
);

export const addNewTaskFailed = createAction(
  '[To Do List Component] Add New Task Failed',
  props<{ err: Error }>()
);

export const editTaskSubmitted = createAction(
  '[To Do List Component] Edit Task Submmitted',
  props<{ task: Task }>()
);

export const editTaskSuccess = createAction(
  '[To Do List Component] Edit Task Success',
  props<{ task: Task; payload: Task }>()
);

export const editTaskFailed = createAction(
  '[To Do List Component] Edit Task Failed',
  props<{ err: Error }>()
);

export const deleteTaskSubmitted = createAction(
  '[To Do List Component] Delete Task Submitted',
  props<{ taskId: number }>()
);

export const deleteTaskSuccess = createAction(
  '[To Do List Component] Delete Task Success',
  props<{ payload: number }>()
);

export const deleteTaskFailed = createAction(
  '[To Do List Component] Delete Task Failed',
  props<{ err: Error }>()
);

export const injectTranslatedContentInitiated = createAction(
  '[To Do List Component] Inject Translated Content Initiated',
  props<{ task: Task }>()
);

export const injectTranslatedContentSuccess = createAction(
  '[To Do List Component] Inject Translated Content Success',
  props<{ payload: Task }>()
);

export const injectTranslatedContentFailed = createAction(
  '[To Do List Component] Inject Translated Content Failed',
  props<{ err: Error }>()
);
