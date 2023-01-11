import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCollaborationComponent } from './test-collaboration.component';

describe('TestCollaborationComponent', () => {
  let component: TestCollaborationComponent;
  let fixture: ComponentFixture<TestCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCollaborationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
