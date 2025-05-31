import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolio1Component } from './page-portfolio1.component';

describe('PagePortfolio1Component', () => {
  let component: PagePortfolio1Component;
  let fixture: ComponentFixture<PagePortfolio1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePortfolio1Component]
    });
    fixture = TestBed.createComponent(PagePortfolio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
