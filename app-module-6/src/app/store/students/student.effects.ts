import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import {mergeMap, switchMap, map, catchError, withLatestFrom} from 'rxjs/operators';
import { StudentService } from 'src/app/student.service';
import { addStudent, loadAllStudents, loadAllStudentsFailure, loadAllStudentsSuccess } from './student.actions';
import { selectAllStudents } from './student.selector';
import { StudentState } from './student.state';

@Injectable()
export class StudentEffects {
  constructor(private actions: Actions, private stService: StudentService, private store:Store<{student: StudentState}>) {}
  loadStudentEffect = createEffect(() =>
    this.actions.pipe(
        ofType(loadAllStudents),
        switchMap(() => 
            from(this.stService.getStudents()).pipe(
                map(students => loadAllStudentsSuccess({content:students})),
                catchError(() => of(loadAllStudentsFailure()) )
            )
        )
    )  
  );

  saveStudentEffect = createEffect(() =>
  this.actions.pipe(
      ofType(addStudent),
      withLatestFrom(this.store.select(selectAllStudents)),
      switchMap(([act, students]) => 
        from(this.stService.addStudents(students))
      )
  ),
  {dispatch: false}  
);
}
