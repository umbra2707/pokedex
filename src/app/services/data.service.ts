import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    const headers = new HttpHeaders();
    const options = { headers };

    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/?limit=100', options)
        .pipe(
            map(res => res),
            tap(h => {
                const outcome = h ? 'fetched' : 'did not find';
            })
        );
  }

  getByName(name: string): Observable<any> {
    const headers = new HttpHeaders();
    const options = { headers };

    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`, options)
        .pipe(
            map(res => res),
            tap(h => {
                const outcome = h ? 'fetched' : 'did not find';
            })
        );
  }
}
