import { Student } from "src/app/models/student.model";

export interface StudentState {
    students:Student[],
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}