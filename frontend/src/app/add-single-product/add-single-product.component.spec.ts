import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSingleProductComponent } from './add-single-product.component';

describe('AddSingleProductComponent', () => {
  let component: AddSingleProductComponent;
  let fixture: ComponentFixture<AddSingleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSingleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
