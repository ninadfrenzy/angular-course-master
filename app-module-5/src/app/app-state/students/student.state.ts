import { Student } from "src/app/models/student.model";

export interface StudentState{
    students: Student[];
    errorMessage: string;
    status: 'init' | 'loading' |'success' | 'error';
}

export const initialStudentState:StudentState = {
    status: "init",
    students: [],
    errorMessage: ''
}