import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Student } from './models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  addStudent(student: Student) {
    this.getStudents().then(students => {
      students.push(student);
      localStorage.setItem('students', JSON.stringify({students}))
    })
  }
  addStudents(students:Student[]): Promise<any> {
    console.log(students);
    
    return new Promise((resolve, reject) => {
      return resolve(localStorage.setItem('students', JSON.stringify({students:students})))
    })
  }
  getStudents(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const items = localStorage.getItem('students')
        return resolve(JSON.parse(items? items:JSON.stringify({students:[]})).students as Student[])
         
      }, 5000)
    })
  }
}
