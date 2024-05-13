import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatMenuModule } from "@angular/material/menu";
import { CommonModule } from "@angular/common"

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    MatToolbar, 
    MatIcon, 
    MatBadge, 
    MatMenuModule, 
    CommonModule 
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
