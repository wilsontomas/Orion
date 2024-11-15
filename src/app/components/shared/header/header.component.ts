import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { sharedModules } from '../sharedModule';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...sharedModules,MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
