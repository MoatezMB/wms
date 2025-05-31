import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSidebarCategoriesComponent } from './section-sidebar-categories.component';

describe('SectionSidebarCategoriesComponent', () => {
  let component: SectionSidebarCategoriesComponent;
  let fixture: ComponentFixture<SectionSidebarCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSidebarCategoriesComponent]
    });
    fixture = TestBed.createComponent(SectionSidebarCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
