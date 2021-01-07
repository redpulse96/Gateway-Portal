import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) { }
  findById(id: string): Observable<User> {
    let url = API.BASE_URL + "/Users/" + id;
    let headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.get<User>(url, { headers });
  }
  getData(pageNumber?, size?, filter?): Observable<User[]> {
    let url = API.BASE_URL + "/Users";
    let headers = new HttpHeaders().set("Accept", "application/json");
    let params: any = {};

    if (pageNumber) {
      params.pageNumber = pageNumber;
    }

    if (size) {
      params.size = size;
    }
    if (filter) {
      params.filter = filter;
    }

    if (params) {
      return this.http.get<User[]>(url, { params, headers });
    }
    return this.http.get<User[]>(url, { headers });
  }

  save(entity: User): Observable<User> {
    let url = API.BASE_URL + "/Users";
    let headers = new HttpHeaders().set("Accept", "application/json");
    // const formValues = { email: entity.username, password: entity.password };
    console.log("FRM=", entity);
    return this.http.post<User>(url, entity, { headers });
  }

  update(entity: User, ID: any): Observable<User> {
    let url = API.BASE_URL + `/Users/${ID}`;
    let headers = new HttpHeaders().set("Accept", "application/json");

    return this.http.patch<User>(url, entity, { headers });
  }

  delete(id: string): Observable<User> {
    let url = API.BASE_URL + `/Users/${id}/`;
    let headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.delete<User>(url, { headers });
  }

  getVendorTypes(): Observable<any[]> {
    let url = API.BASE_URL + `/azam/vendortype/fetch`;
    let headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.get<any[]>(url, { headers });
  }

  saveUserDetails(entity: any): Observable<any> {
    let url = API.BASE_URL + "/azam/users/completeregistration";
    let headers = new HttpHeaders().set("Accept", "application/json");
    // const formValues = { email: entity.username, password: entity.password };
    console.log("FRM=", entity);
    return this.http.post<any>(url, entity, { headers });
  }
}
