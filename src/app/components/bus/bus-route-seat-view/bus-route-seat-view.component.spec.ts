import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRouteSeatViewComponent } from './bus-route-seat-view.component';

describe('BusRouteSeatViewComponent', () => {
  let component: BusRouteSeatViewComponent;
  let fixture: ComponentFixture<BusRouteSeatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRouteSeatViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusRouteSeatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
