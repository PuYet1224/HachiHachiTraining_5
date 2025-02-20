import { Component } from '@angular/core';
import { PanelBarExpandMode } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public expandMode = PanelBarExpandMode.Multiple;

}