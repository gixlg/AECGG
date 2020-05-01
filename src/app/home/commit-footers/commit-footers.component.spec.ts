import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitFootersComponent } from './commit-footers.component';

describe('CommitFootersComponent', () => {
  let component: CommitFootersComponent;
  let fixture: ComponentFixture<CommitFootersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitFootersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitFootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
