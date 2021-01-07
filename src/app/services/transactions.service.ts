import { Injectable } from "@angular/core";
import { Transactions } from "../models/transaction.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  constructor(private http: HttpClient) {}
  findById(id: number): Observable<Transactions> {
    let url = API.BASE_URL + "/Transactionss/" + id;
    let headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.get<Transactions>(url, { headers });
  }
  getData(pageNumber?, size?, filter?): Observable<Transactions[]> {
    let url = API.BASE_URL + "/Transactionss";
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
      return this.http.get<Transactions[]>(url, { params, headers });
    }
    return this.http.get<Transactions[]>(url, { headers });
  }

  save(entity: Transactions): Observable<Transactions> {
    let url = API.BASE_URL + "/Transactionss";
    let headers = new HttpHeaders().set("Accept", "application/json");
    // const formValues = { email: entity.Transactionsname, password: entity.password };
    console.log("FRM=", entity);
    return this.http.post<Transactions>(url, entity, { headers });
  }

  update(entity: Transactions, ID: any): Observable<Transactions> {
    let url = API.BASE_URL + `/Transactionss/${ID}`;
    let headers = new HttpHeaders().set("Accept", "application/json");

    return this.http.patch<Transactions>(url, entity, { headers });
  }

  delete(id: string): Observable<Transactions> {
    let url = API.BASE_URL + `/Transactionss/${id}/`;
    let headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.delete<Transactions>(url, { headers });
  }
}
