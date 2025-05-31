import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSidebarSearchComponent } from './section-sidebar-search.component';

describe('SectionSidebarSearchComponent', () => {
  let component: SectionSidebarSearchComponent;
  let fixture: ComponentFixture<SectionSidebarSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSidebarSearchComponent]
    });
    fixture = TestBed.createComponent(SectionSidebarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
