import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPagesLayoutComponent } from './inner-pages-layout.component';

describe('InnerPagesLayoutComponent', () => {
  let component: InnerPagesLayoutComponent;
  let fixture: ComponentFixture<InnerPagesLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerPagesLayoutComponent]
    });
    fixture = TestBed.createComponent(InnerPagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
