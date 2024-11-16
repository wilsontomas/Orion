import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { sharedModules } from '../sharedModule';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-address-list-dialog',
  standalone: true,
  imports: [...sharedModules],
  templateUrl: './address-list-dialog.component.html',
  styleUrl: './address-list-dialog.component.css'
})
export class AddressListDialogComponent implements OnInit {
  
constructor(
  private dialogRef: MatDialogRef<AddressListDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: number,
  private clientService:ClientService,
  
){}
  ngOnInit() {
    
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
