import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { CryptochartComponent } from './cryptochart/cryptochart.component';
import { CryptoApiService } from './crypto-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarComponent, CryptochartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
  constructor(private cryptoApiService: CryptoApiService) {}

  ngOnInit() {
    this.cryptoApiService.get_test().subscribe(
      (response) => { console.log(response); },
      (error)=> { console.log(error); }
    )
  }
}
