import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerFormElementsComponent } from './scheduler-form-elements.component';

describe('SchedulerFormElementsComponent', () => {
  let component: SchedulerFormElementsComponent;
  let fixture: ComponentFixture<SchedulerFormElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerFormElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
