import { Injectable } from "@angular/core";
import { Roles } from "../models/roles.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RolesService {
  constructor(private http: HttpClient) {}
  findById(id: string): Observable<Roles> {
    let url = API.BASE_URL + "/Roless/" + id;
    let headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.get<Roles>(url, { headers });
  }
  getData(pageNumber?, size?, filter?): Observable<Roles[]> {
    let url = API.BASE_URL + "/Roless";
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
      return this.http.get<Roles[]>(url, { params, headers });
    }
    return this.http.get<Roles[]>(url, { headers });
  }

  save(entity: Roles): Observable<Roles> {
    let url = API.BASE_URL + "/Roless";
    let headers = new HttpHeaders().set("Accept", "application/json");
    // const formValues = { email: entity.Rolesname, password: entity.password };
    console.log("FRM=", entity);
    return this.http.post<Roles>(url, entity, { headers });
  }

  update(entity: Roles, ID: any): Observable<Roles> {
    let url = API.BASE_URL + `/Roless/${ID}`;
    let headers = new HttpHeaders().set("Accept", "application/json");

    return this.http.patch<Roles>(url, entity, { headers });
  }

  delete(id: string): Observable<Roles> {
    let url = API.BASE_URL + `/Roless/${id}/`;
    let headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.delete<Roles>(url, { headers });
  }
}
