package com.CRUD.backend.dao;

import com.CRUD.backend.entity.employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface employeeRepository extends JpaRepository<employee,Long>{
}
