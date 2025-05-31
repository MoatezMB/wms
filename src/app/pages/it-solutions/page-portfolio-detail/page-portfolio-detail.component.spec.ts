import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioDetailComponent } from './page-portfolio-detail.component';

describe('PagePortfolioDetailComponent', () => {
  let component: PagePortfolioDetailComponent;
  let fixture: ComponentFixture<PagePortfolioDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePortfolioDetailComponent]
    });
    fixture = TestBed.createComponent(PagePortfolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
