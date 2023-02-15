import { createAction } from "@ngrx/store";

export const createTask = createAction("[Counter Component] Increment");
export const getAllTasks = createAction("[Counter Component] Decrement");
export const editTask = createAction("[Counter Component] Reset");
export const deleteTask = createAction("[Counter Component] Reset");
