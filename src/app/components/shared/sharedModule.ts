import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import {MatTableModule} from '@angular/material/table';

export const commonModules=[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
]

export const sharedModules=[
    ...commonModules,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule
    
]

