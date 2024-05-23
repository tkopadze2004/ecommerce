import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessOrderComponent } from './success-order.component';

describe('SuccessOrderComponent', () => {
  let component: SuccessOrderComponent;
  let fixture: ComponentFixture<SuccessOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
