import { Action, createReducer, on } from "@ngrx/store";
import * as TaskAction from "./task.action";
import { initialState, TaskListState } from "./task.state";

const tasksReducer = createReducer(
  initialState,
  on(TaskAction.loadTaskListSuccess, (state, action) => {
    return [...action.payload];
  }),
  on(TaskAction.addNewTaskSuccess, (state, action) => {
    return [...state, action.payload];
  }),
  on(TaskAction.editTaskSuccess, (state, action) => [...state]),
  on(TaskAction.deleteTaskSuccess, (state, action) => [
    ...state.filter((task) => task.id != action.payload)
  ])
);

export function reducer(state: TaskListState | undefined, action: Action) {
  return tasksReducer(state, action);
}
