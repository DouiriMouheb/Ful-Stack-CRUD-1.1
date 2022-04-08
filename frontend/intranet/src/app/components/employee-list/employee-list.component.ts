import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/common/employee';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];
  opened=false;
  constructor(private employService: EmployeeService) { }

  ngOnInit() {
    this.listEmployees();
  }
  listEmployees() {
    this.employService.getEmployeeList().subscribe(
      data => {
        this.employees = data;

      }
    )
  }

}
