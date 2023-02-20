import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Task } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  url =
    'https://translation.googleapis.com/language/translate/v2?key=AIzaSyA7uGrroLhM_VOOtBSmO6KSZD7CdftKt0Q';

  constructor(private http: HttpClient) {}

  translate(task: Task) {
    return this.http
      .post(this.url, {
        q: task.content,
        target: 'es'
      })
      .pipe(
        map((res: any) => {
          const translatedTask = {
            ...task,
            translatedContent: res.data.translations[0].translatedText
          };
          return translatedTask;
        })
      );
  }
}
