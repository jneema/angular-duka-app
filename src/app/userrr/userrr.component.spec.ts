import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrrComponent } from './userrr.component';

describe('UserrrComponent', () => {
  let component: UserrrComponent;
  let fixture: ComponentFixture<UserrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
