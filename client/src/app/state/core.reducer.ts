import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as tasksReducer from "./tasks/task.reducer";

export const reducers: ActionReducerMap<State> = {
  taskList: tasksReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = [];
