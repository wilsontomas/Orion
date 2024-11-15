import { Component, Inject } from '@angular/core';
import { sharedModules } from '../sharedModule';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IClient } from '../../../models/clientModel';

@Component({
  selector: 'app-client-dialog',
  standalone: true,
  imports: [...sharedModules],
  templateUrl: './client-dialog.component.html',
  styleUrl: './client-dialog.component.css'
})
export class ClientDialogComponent {
  name?:string='';
  
  constructor(
    public dialogRef: MatDialogRef<ClientDialogComponent>,
   // @Inject(MAT_DIALOG_DATA) public data: number
   ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
