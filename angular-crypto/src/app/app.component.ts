import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CryptochartComponent } from './cryptochart/cryptochart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CryptochartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Crypto Values';
}
