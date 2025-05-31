import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWhyChooseUsComponent } from './page-why-choose-us.component';

describe('PageWhyChooseUsComponent', () => {
  let component: PageWhyChooseUsComponent;
  let fixture: ComponentFixture<PageWhyChooseUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageWhyChooseUsComponent]
    });
    fixture = TestBed.createComponent(PageWhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
