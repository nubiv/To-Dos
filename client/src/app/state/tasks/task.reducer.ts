import { Action, createReducer, on } from '@ngrx/store';
import * as TaskAction from './task.action';
import { initialState, TaskListState } from './task.state';

const tasksReducer = createReducer(
  initialState,
  on(TaskAction.loadTaskListSuccess, (state, action) => {
    if (action.payload) {
      return [...action.payload];
    } else {
      return [...state];
    }
  }),
  on(TaskAction.loadTaskListFailed, (state, action) => {
    console.log(action.err);
    window.alert('Something went wrong while loading task list.');
    return [...state];
  }),
  on(TaskAction.addNewTaskSuccess, (state, action) => {
    console.log(action);
    window.alert('Successfully added task.');
    return [...state, action.payload];
  }),
  on(TaskAction.addNewTaskFailed, (state, action) => {
    console.log(action.err);
    window.alert('Something went wrong while adding new task.');
    return [...state];
  }),
  on(TaskAction.editTaskSuccess, (state, action) => {
    if (action.payload) {
      const updatedState = state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return [...updatedState];
    } else {
      return [...state];
    }
  }),
  on(TaskAction.editTaskFailed, (state, action) => {
    console.log(action.err);
    window.alert('Something went wrong while editing task.');
    return [...state];
  }),
  on(TaskAction.deleteTaskSuccess, (state, action) => {
    window.alert('Successfully deleted task.');
    return [...state.filter((task) => task.id != action.payload)];
  }),
  on(TaskAction.deleteTaskFailed, (state, action) => {
    console.log(action.err);
    window.alert('Something went wrong while deleting task.');
    return [...state];
  }),
  on(TaskAction.injectTranslatedContentSuccess, (state, action) => {
    if (action.payload) {
      const task = action.payload;
      const updatedState = state.map((value) =>
        value.id === task.id ? action.payload : value
      );
      return [...updatedState];
    } else {
      return [...state];
    }
  }),
  on(TaskAction.injectTranslatedContentFailed, (state, action) => {
    console.log(action.err);
    window.alert('Something went wrong while translating tasks.');
    return [...state];
  })
);

export function reducer(state: TaskListState | undefined, action: Action) {
  return tasksReducer(state, action);
}
