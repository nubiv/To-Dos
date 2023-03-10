import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTabNavPanel } from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/env/environments';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatButtonModule,
        MatRippleModule
      ],
      declarations: [AppComponent, LayoutComponent, MatTabNavPanel]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'My-To-Dos'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('My-To-Dos');
  });
});
