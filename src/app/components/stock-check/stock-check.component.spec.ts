import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCheckComponent } from './stock-check.component';

describe('StockCheckComponent', () => {
  let component: StockCheckComponent;
  let fixture: ComponentFixture<StockCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
