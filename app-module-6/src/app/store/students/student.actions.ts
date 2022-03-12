import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/models/student.model";

export const addStudent = createAction('[STUDENT] Add a student', props<{content: Student}>());
export const removeStudent = createAction('[STUDENT] Delete a student', props<{content: string}>());
export const loadAllStudents = createAction('[STUDENT] Load All Students');
export const loadAllStudentsFailure = createAction('[STUDENT] Load All Students Failed');
export const loadAllStudentsSuccess = createAction('[STUDENT] Load All Students Success', props<{content: Student[]}>());