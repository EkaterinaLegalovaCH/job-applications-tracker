package com.katecode.spring_boot_job_tracker.entity;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "users")
@Data

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_name", unique = true, nullable = false)
    private String userName;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "password", nullable = false)
    private String password;

    @JsonProperty("id")
    public Long getId() {
        return id;
    }
}
