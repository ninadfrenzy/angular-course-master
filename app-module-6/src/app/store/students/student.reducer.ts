import { createReducer, on } from "@ngrx/store";
import { addStudent, loadAllStudents, loadAllStudentsFailure, loadAllStudentsSuccess } from "./student.actions";
import {StudentState} from './student.state'

export const initialState:StudentState = {
    students:[],
    error: '',
    status: 'pending'
}
export const studentReducer = createReducer(initialState, on(addStudent, (state: StudentState, { content }) => ({
    ...state,
    students: [...state.students, content]
})),
    on(loadAllStudentsSuccess, (state: StudentState, {content}) => ({
        ...state,
        students: content,
        status: 'success',
        error: ''
    })),
    on(loadAllStudents, (state: StudentState, {}) => ({
        ...state,
        status: 'loading',
        error: ''
    })),
    on(loadAllStudentsFailure, (state: StudentState, {}) => ({
        ...state,
        status: 'error',
        error: 'Failed to load data'
    }))
);