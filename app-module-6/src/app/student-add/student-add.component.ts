import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable} from 'rxjs';
import { Student } from '../models/student.model';
import { addStudent, loadAllStudents } from '../store/students/student.actions';
import { selectAllStudents, selectStudentState } from '../store/students/student.selector';

import { StudentState } from '../store/students/student.state';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private store:Store<{student: StudentState}>, private stService: StudentService) { }
  students!: Observable<Student[]>;
  stState!: Observable<StudentState>;
  name='';
  id='';
  ngOnInit(): void {
    this.students = this.store.select(selectAllStudents);
    this.stState = this.store.select(selectStudentState)
    this.store.dispatch(loadAllStudents())
  }
  addStudent() {
    this.store.dispatch(addStudent({content: {name:this.name, id: this.id}}));
  }
}
