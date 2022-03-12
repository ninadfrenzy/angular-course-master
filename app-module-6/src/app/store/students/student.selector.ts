import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { StudentState } from "./student.state";

export const selectStudents = (state:AppState) => state.student;
export const selectAllStudents = createSelector(selectStudents, (state:StudentState) => state.students);
export const selectStudentState = createSelector(selectStudents, (state:StudentState) => state);