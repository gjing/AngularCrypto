import { Component } from '@angular/core';
import { CryptoApiService } from '../crypto-api.service';
import { LineComponent } from '../line/line.component';

@Component({
  selector: 'app-cryptochart',
  standalone: true,
  imports: [LineComponent],
  templateUrl: './cryptochart.component.html',
  styleUrl: './cryptochart.component.css'
})
export class CryptochartComponent {
  data: Object = {};

  constructor(private cryptoApiService: CryptoApiService) {}

  ngOnInit() {
    this.cryptoApiService.get_test().subscribe((data: object) => {
      this.data = data;
    });
  }
}