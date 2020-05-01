import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitBodyComponent } from './commit-body.component';

describe('CommitBodyComponent', () => {
  let component: CommitBodyComponent;
  let fixture: ComponentFixture<CommitBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
