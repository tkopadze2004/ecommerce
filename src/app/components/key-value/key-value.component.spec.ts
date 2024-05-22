import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueComponent } from './key-value.component';

describe('KeyValueComponent', () => {
  let component: KeyValueComponent;
  let fixture: ComponentFixture<KeyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
