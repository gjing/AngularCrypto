import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {
  constructor(private http: HttpClient) { }
  get_test() {
    let test_url = "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1";
    return this.http.get(test_url);
  }
}
