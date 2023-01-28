import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    //const app1 = new AppComponent();
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // here we are testing that throught the TestBed are we able to crete an object/instance of AppComponent
                              // this assertion will pass if the object/instance was created successfully  
  });

  it(`should have as title 'angular-dec-17-my-trip'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-dec-17-my-trip');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // this will run the change detection cycle
    const compiled = fixture.nativeElement as HTMLElement; // this will give a reference to the template
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-dec-17-my-trip app is running!');
  });
});
