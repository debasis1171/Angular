import { Component } from '@angular/core';
import { UsingmattableComponent } from '../usingmattable/usingmattable.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsingmattableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
