import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionClients1Component } from './section-clients1.component';

describe('SectionClients1Component', () => {
  let component: SectionClients1Component;
  let fixture: ComponentFixture<SectionClients1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionClients1Component]
    });
    fixture = TestBed.createComponent(SectionClients1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
