import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestssellerComponent } from './requestsseller.component';

describe('RequestssellerComponent', () => {
  let component: RequestssellerComponent;
  let fixture: ComponentFixture<RequestssellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestssellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestssellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
