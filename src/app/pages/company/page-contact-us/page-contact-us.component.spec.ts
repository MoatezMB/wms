import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactUsComponent } from './page-contact-us.component';

describe('PageContactUsComponent', () => {
  let component: PageContactUsComponent;
  let fixture: ComponentFixture<PageContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageContactUsComponent]
    });
    fixture = TestBed.createComponent(PageContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
