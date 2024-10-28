import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-card-dashboard',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './card-dashboard.component.html',
  styleUrl: './card-dashboard.component.css'
})
export class CardDashboardComponent {

  @Input() title: string = '';
  @Input() info: string = '';
  @Input() description: string = '';
  @Input() backgroundColor: string = '';
}
