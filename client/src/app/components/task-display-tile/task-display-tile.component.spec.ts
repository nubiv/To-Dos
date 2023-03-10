import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDisplayTileComponent } from './task-display-tile.component';

describe('TaskDisplayTileComponent', () => {
  let component: TaskDisplayTileComponent;
  let fixture: ComponentFixture<TaskDisplayTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDisplayTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDisplayTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
