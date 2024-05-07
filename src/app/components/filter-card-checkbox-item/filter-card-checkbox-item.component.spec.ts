import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCardCheckboxItemComponent } from './filter-card-checkbox-item.component';

describe('FilterCardCheckboxItemComponent', () => {
  let component: FilterCardCheckboxItemComponent;
  let fixture: ComponentFixture<FilterCardCheckboxItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCardCheckboxItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterCardCheckboxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
