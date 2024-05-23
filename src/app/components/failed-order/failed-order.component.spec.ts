import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedOrderComponent } from './failed-order.component';

describe('FailedOrderComponent', () => {
  let component: FailedOrderComponent;
  let fixture: ComponentFixture<FailedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailedOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FailedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
