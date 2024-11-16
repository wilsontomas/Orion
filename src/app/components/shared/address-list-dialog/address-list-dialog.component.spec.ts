import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListDialogComponent } from './address-list-dialog.component';

describe('AddressListDialogComponent', () => {
  let component: AddressListDialogComponent;
  let fixture: ComponentFixture<AddressListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressListDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
