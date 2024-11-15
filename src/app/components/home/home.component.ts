import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { sharedModules } from '../shared/sharedModule';
import { HeaderComponent } from '../shared/header/header.component';
import { IClient, tableColumns } from '../../models/clientModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../../services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientDialogComponent } from '../shared/client-dialog/client-dialog.component';
import { AddressDialogComponent } from '../shared/address-dialog/address-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [...sharedModules, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit{
  
  constructor(
    private clientService:ClientService,
    private dialog: MatDialog
  ){}

  data:IClient[]=[];

  ngOnInit() {
   this.updateClientList();
  }
  dataSource = new MatTableDataSource<IClient>(this.data);

  displayedColumns = tableColumns;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addClient(name:string){
    this.clientService.addClient(name);
  
    this.updateClientList();
  }

  updateClientList(){
    this.dataSource.data = this.clientService.getClientList();
  }

  openModal(id:number){

  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.addClient(result)
      
      
    });
  }

  
  openAddressDialog(id:number): void {
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      width: '250px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    
    });
  }
}
