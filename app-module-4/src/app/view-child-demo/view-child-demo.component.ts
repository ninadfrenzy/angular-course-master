import { Component, ElementRef, OnInit, ViewChild, Type, ComponentRef } from '@angular/core';
import { DefaultComponent } from '../default/default.component';
import { LoaderDirective } from '../loader.directive';
import { StudentComponent } from '../student/student.component';
import { TeacherComponent } from '../teacher/teacher.component';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.css']
})
export class ViewChildDemoComponent implements OnInit {
  @ViewChild(LoaderDirective, {static: true}) templateReference!: LoaderDirective;
  componentMap: any = {
    student: StudentComponent,
    teacher: TeacherComponent,
    default: DefaultComponent
  }
  userRole: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

  changeMessage() {

  }
  loadProfile() {
    
    let contRef = this.templateReference.viewContRef;
    contRef.clear();
    let componentToLoad = this.componentMap[this.userRole]
    let componentRef: ComponentRef<any> = contRef.createComponent(componentToLoad);
    
    componentRef.instance['obj'] = {
      id: 2,
      name: 'xyz'
    }
    componentRef.instance.evt.subscribe((data: any) => {
      console.log(data);
      
    })
    
  }
  removeProfile() {
    let contRef = this.templateReference.viewContRef;
    contRef.clear();
  }
}
