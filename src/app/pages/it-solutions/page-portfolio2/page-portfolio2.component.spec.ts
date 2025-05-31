import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolio2Component } from './page-portfolio2.component';

describe('PagePortfolio2Component', () => {
  let component: PagePortfolio2Component;
  let fixture: ComponentFixture<PagePortfolio2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePortfolio2Component]
    });
    fixture = TestBed.createComponent(PagePortfolio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
