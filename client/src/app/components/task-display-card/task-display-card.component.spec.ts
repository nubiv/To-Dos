import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDisplayCardComponent } from './task-display-card.component';

describe('TaskDisplayCardComponent', () => {
  let component: TaskDisplayCardComponent;
  let fixture: ComponentFixture<TaskDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDisplayCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
