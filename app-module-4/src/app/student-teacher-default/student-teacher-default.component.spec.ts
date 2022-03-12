import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTeacherDefaultComponent } from './student-teacher-default.component';

describe('StudentTeacherDefaultComponent', () => {
  let component: StudentTeacherDefaultComponent;
  let fixture: ComponentFixture<StudentTeacherDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTeacherDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTeacherDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
