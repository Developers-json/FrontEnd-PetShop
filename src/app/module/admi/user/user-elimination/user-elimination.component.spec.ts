import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEliminationComponent } from './user-elimination.component';

describe('UserEliminationComponent', () => {
  let component: UserEliminationComponent;
  let fixture: ComponentFixture<UserEliminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEliminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEliminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
