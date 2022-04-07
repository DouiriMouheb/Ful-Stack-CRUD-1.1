package com.CRUD.backend.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name ="userslist" )
@Data
public class employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

}
