import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {
  constructor(private http: HttpClient) { }
  get_bitcoin() {
    let bitcoin_url = "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1";
    return this.http.get(bitcoin_url);
  }
}
