import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutUsComponent } from './page-about-us.component';

describe('PageAboutUsComponent', () => {
  let component: PageAboutUsComponent;
  let fixture: ComponentFixture<PageAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAboutUsComponent]
    });
    fixture = TestBed.createComponent(PageAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
