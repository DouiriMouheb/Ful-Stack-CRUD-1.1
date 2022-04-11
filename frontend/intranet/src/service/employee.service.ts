import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/common/employee';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseUrl='http://localhost:9090/api/employees';
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.employees)
    );
  }
  getEmployeeListPaginate(thePage: number,thePageSize: number): Observable<Employee[]>{
    const url = `${this.baseUrl}`+`?page=${thePage}&size=${thePageSize}`
    return this.httpClient.get<GetResponse>(url).pipe(
      map(response => response._embedded.employees
        )
    );
  }
}
interface GetResponse{
  _embedded: {
    employees: Employee[];
  },
  page:{
    size: number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}
