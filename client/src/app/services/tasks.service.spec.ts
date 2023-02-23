import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TasksService } from './tasks.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/env/environments';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../components/home/home.component';

describe('TasksService', () => {
  let tasksService: TasksService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent }
        ])
      ]
    });
    tasksService = TestBed.inject(TasksService);
    httpTestingController = TestBed.inject(HttpTestingController);

    // create a mock localstorage
    let store: any = {};
    const mockLocalStorage = {
      getItem: (user: string): any => {
        return user in store ? store[user] : null;
      },
      setItem: (user: string, value: any) => {
        store[user] = `${value}`;
      },
      removeItem: (user: string) => {
        delete store[user];
      },
      clear: () => {
        store = {};
      }
    };
    // whenever localStorage.getItem is called, instead, call mockLocalStorage.getItem with the same arguments, and so on
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    // set a dummy user in localstorage
    const user: any = {
      uid: 'jsdkjfkskjefjssdfsdf',
      displayName: 'dummy',
      email: '123124@gmail.com',
      emailVerified: true
    };
    localStorage.setItem('user', JSON.stringify(user));
  });

  afterEach(() => {
    // verify there is no outstanding http calls after each test
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(tasksService).toBeTruthy();
  });

  it('#getTaskList should use GET to retrive data', () => {
    const user = JSON.parse(localStorage.getItem('user')!);
    tasksService.getTaskList().subscribe();

    const testRequest = httpTestingController.expectOne(
      `/api/${user.uid}/tasks`
    );

    expect(testRequest.request.method).toEqual('GET');
  });

  it('#addNewTask should use POST to send data', () => {
    const user = JSON.parse(localStorage.getItem('user')!);
    tasksService.addNewTask({ content: 'hi' }).subscribe();

    const testRequest = httpTestingController.expectOne(
      `/api/${user.uid}/tasks`
    );

    expect(testRequest.request.method).toEqual('POST');
  });

  it('#addNewTask should send request with expected body', () => {
    const user = JSON.parse(localStorage.getItem('user')!);
    tasksService.addNewTask({ content: 'hi', status: 'TO DO' }).subscribe();

    const testRequest = httpTestingController.expectOne(
      `/api/${user.uid}/tasks`
    );

    const expectedData = {
      content: 'hi',
      status: 'TO DO',
      // #addNewTask take userId from localstorage inside the function call
      userId: undefined
    };

    expect(testRequest.request.body).toEqual(expectedData);
  });
});
