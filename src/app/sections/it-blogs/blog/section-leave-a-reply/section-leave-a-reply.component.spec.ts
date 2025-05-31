import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLeaveAReplyComponent } from './section-leave-a-reply.component';

describe('SectionLeaveAReplyComponent', () => {
  let component: SectionLeaveAReplyComponent;
  let fixture: ComponentFixture<SectionLeaveAReplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionLeaveAReplyComponent]
    });
    fixture = TestBed.createComponent(SectionLeaveAReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
