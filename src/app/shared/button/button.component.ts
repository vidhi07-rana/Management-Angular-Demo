import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[app-button], a[app-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input({required:true}) buttonName!:string
@Input({required:true}) symbol!:string
}
