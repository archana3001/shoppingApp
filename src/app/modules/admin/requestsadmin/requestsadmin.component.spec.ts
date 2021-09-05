import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsadminComponent } from './requestsadmin.component';

describe('RequestsadminComponent', () => {
  let component: RequestsadminComponent;
  let fixture: ComponentFixture<RequestsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
