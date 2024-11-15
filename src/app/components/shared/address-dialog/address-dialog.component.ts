import { Component, Inject } from '@angular/core';
import { sharedModules } from '../sharedModule';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IClient } from '../../../models/clientModel';

@Component({
  selector: 'app-address-dialog',
  standalone: true,
  imports: [...sharedModules],
  templateUrl: './address-dialog.component.html',
  styleUrl: './address-dialog.component.css'
})
export class AddressDialogComponent {

  name?:string='';
  constructor(
    public dialogRef: MatDialogRef<AddressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
