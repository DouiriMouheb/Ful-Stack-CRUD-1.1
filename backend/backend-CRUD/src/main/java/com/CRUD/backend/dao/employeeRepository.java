package com.CRUD.backend.dao;

import com.CRUD.backend.entity.employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface employeeRepository extends JpaRepository<employee,Long>{
}
