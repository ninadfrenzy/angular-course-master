import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/models/student.model";

export const addStudent = createAction(
    '[STUDENT] ADD NEW STUDENT',
    props<{ content: Student }>()
)