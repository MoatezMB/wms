import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSidebarGalleryComponent } from './section-sidebar-gallery.component';

describe('SectionSidebarGalleryComponent', () => {
  let component: SectionSidebarGalleryComponent;
  let fixture: ComponentFixture<SectionSidebarGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSidebarGalleryComponent]
    });
    fixture = TestBed.createComponent(SectionSidebarGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
