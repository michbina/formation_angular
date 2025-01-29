import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  baseUrl='api/movies/search';

  constructor(private httpClient:HttpClient) { }

  search(title:string) {

    const options = {
      params: new HttpParams().set('title', title)
    };

    return this.httpClient.get(`${this.baseUrl}`, options);

  }
}
