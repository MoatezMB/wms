import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMissionComponent } from './page-mission.component';

describe('PageMissionComponent', () => {
  let component: PageMissionComponent;
  let fixture: ComponentFixture<PageMissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMissionComponent]
    });
    fixture = TestBed.createComponent(PageMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
