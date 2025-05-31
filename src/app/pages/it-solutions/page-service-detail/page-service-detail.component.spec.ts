import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServiceDetailComponent } from './page-service-detail.component';

describe('PageServiceDetailComponent', () => {
  let component: PageServiceDetailComponent;
  let fixture: ComponentFixture<PageServiceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageServiceDetailComponent]
    });
    fixture = TestBed.createComponent(PageServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
