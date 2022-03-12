import { createSelector } from "@ngrx/store";
import { Student } from "src/app/models/student.model";
import { AppState } from "../app.state"
import { StudentState } from "./student.state";

export const selectStudents = (state: AppState) => state.students;

export const selectAllStudents = createSelector<AppState, [state: StudentState], Student[]>(
    selectStudents,
    (state: StudentState) => state.students
)