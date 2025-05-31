import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome3Component } from './page-home3.component';

describe('PageHome3Component', () => {
  let component: PageHome3Component;
  let fixture: ComponentFixture<PageHome3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHome3Component]
    });
    fixture = TestBed.createComponent(PageHome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
