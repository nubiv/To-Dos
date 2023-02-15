import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "./task";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: "root"
})
export class TaskActionService {
  constructor(public afs: AngularFirestore, private http: HttpClient) {}

  GetAllTasks() {
    const user = JSON.parse(localStorage.getItem("user")!);

    return this.http.get(`/api/${user.uid}/tasks`);
  }

  CreateTask(task: Task) {
    const user = JSON.parse(localStorage.getItem("user")!);

    const newTask = {
      content: task.content,
      status: task.status
    };

    return this.http.post(`/api/${user.uid}/tasks`, newTask);
  }

  EditTask(taskId: number) {
    const user = JSON.parse(localStorage.getItem("user")!);

    const updatedTask = {
      content: "something"
    };

    return this.http.patch(`/api/${user.uid}/tasks/${taskId}`, updatedTask);
  }

  DeleteTask(taskId: number) {
    const user = JSON.parse(localStorage.getItem("user")!);
    console.log(taskId);

    return this.http.delete(`/api/${user.uid}/tasks/${taskId}`);
  }

  test(token: any) {
    this.http
      .get("http://localhost:8000/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .subscribe((res) => console.log(res));
  }
}
