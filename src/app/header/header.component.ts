import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";
import { DashboardItemComponent } from "../dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, DashboardItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
