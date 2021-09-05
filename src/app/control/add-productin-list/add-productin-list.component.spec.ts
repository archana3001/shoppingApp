import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductinListComponent } from './add-productin-list.component';

describe('AddProductinListComponent', () => {
  let component: AddProductinListComponent;
  let fixture: ComponentFixture<AddProductinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
