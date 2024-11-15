import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { commonModules, sharedModules } from '../shared/sharedModule';
import { HeaderComponent } from '../shared/header/header.component';
import { dataSourceRaw, IClient, tableColumns } from '../../models/clientModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [...sharedModules, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit{
  
  constructor(
    private clientService:ClientService
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

  addClient(){
    this.clientService.addClient();
  
    this.updateClientList();
  }

  updateClientList(){
    this.dataSource.data = this.clientService.getClientList();
  }
}
