import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { API } from "../../environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // TO Get the CurrentUserValue
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  // TO initiate the Login
  login(username, password) {
    this.http.post<any>(`${API.BASE_URL}/cms/login`, { username, password }).subscribe((user) => {
      console.log("user====>", user)
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }, (err) => {
      // TO SHOW EROOR TOASTER
    })
  }

  // TO initiate the logout
  logout(token: string) {
    // remove user from local storage and set current user to null
    let url = API.BASE_URL + "/Users/"
    let headers = new HttpHeaders().set("Accept", "application/json");
    headers.set("Authorization", token);
    this.http.get<any>(url, { headers }).subscribe((response) => {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }, (err) => {
      // TODO SHOW TOASTER
    })

  }
}
