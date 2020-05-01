import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitScopeComponent } from './commit-scope.component';

describe('CommitScopeComponent', () => {
  let component: CommitScopeComponent;
  let fixture: ComponentFixture<CommitScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
