import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPageComponent } from './additional-page.component';

describe('AdditionalPageComponent', () => {
  let component: AdditionalPageComponent;
  let fixture: ComponentFixture<AdditionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
