import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinkItemComponent } from './footer-link-item.component';

describe('FooterLinkItemComponent', () => {
  let component: FooterLinkItemComponent;
  let fixture: ComponentFixture<FooterLinkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLinkItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterLinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
