import { createReducer, on } from "@ngrx/store";
import { addStudent } from "./student.actions";
import { initialStudentState, StudentState } from "./student.state";

export const studentReducer = createReducer(
    initialStudentState,
    on(addStudent, (state: StudentState, { content }) => ({
        ...state,
        students : [...state.students,content]
        
    }))
)