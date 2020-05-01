import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitDescriptionComponent } from './commit-description.component';

describe('CommitDescriptionComponent', () => {
  let component: CommitDescriptionComponent;
  let fixture: ComponentFixture<CommitDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
