import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TaskFilterPipe } from 'src/app/pipes/task-filter.pipe';

import { TaskDisplayTileComponent } from './task-display-tile.component';

describe('TaskDisplayTileComponent', () => {
  let component: TaskDisplayTileComponent;
  let fixture: ComponentFixture<TaskDisplayTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDisplayTileComponent, TaskFilterPipe],
      imports: [MatCardModule, MatListModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDisplayTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
