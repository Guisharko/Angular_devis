import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get(`${environment.urlApi}/photos`)
  }

  public getPost(id: number) {
    return this.http.get(`${environment.urlApi}/posts/${id}`)
  }
  public getUser(id: number) {
    return this.http.get(`${environment.urlApi}/users/${id}`)
  }



}
