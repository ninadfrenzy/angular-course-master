import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../message.service';

import { TestComponent } from './test.component';
class MockMessageService{
  message = "static value";

  getData() {
    return this.message;
  }
}
describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let msgService:MessageService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent, ],
      providers: [
        {provide: MessageService, useClass: MockMessageService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    msgService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('component is created correctly', () => {

    expect(component).toBeTruthy();
  });
  it('should have default values' ,() => {
    let myStr = component.myStr;
    let myNum = component.myNum;
    let myBool = component.myBool;
    
    expect(myNum).toEqual(10);
    expect(myBool).toBeFalsy();

  });
  it('should add nums', () => {
    expect(component.addNums(5,6)).toEqual(11);
  });
  it('should show message correctly', () => {
    let elementRef = fixture.debugElement.nativeElement;
    let shownText = elementRef.querySelector('div').textContent;
    expect(shownText).toEqual(component.myStr)
  });
  it('should show values correctly', () => {
    let elementRef = fixture.debugElement.nativeElement;
    let shownBool = elementRef.querySelector('div#testdiv').textContent;
    expect(shownBool=='true').toBeFalsy()
  });
  it('should fetch from service', () => {
    // msgService.message = "test message";
    component.ngOnInit();
    expect(component.myStr).toEqual("static value");

  });
  it('should load the h1 tag', () => {
    let elRef = fixture.debugElement.nativeElement;
    let shownMessage = elRef.querySelector('h1').textContent;
    expect(shownMessage).toBeTruthy();
  });
  it('should load the correct message', () => {
    let elRef = fixture.debugElement.nativeElement;
    let shownMessage = elRef.querySelector('h1').textContent;
    expect(shownMessage).toEqual("Page was loaded successfully");
  });
  it('should load the correct message as variable', () => {
    let elRef = fixture.debugElement.nativeElement;
    let shownMessage = elRef.querySelector('h1').textContent;
    expect(shownMessage).toEqual(component.message);
  });

  

});
