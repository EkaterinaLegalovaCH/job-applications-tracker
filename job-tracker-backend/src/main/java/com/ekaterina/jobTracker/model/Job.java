package com.ekaterina.jobtracker.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String company;
    private String position;
    private String status;
    private LocalDateTime createdAt;

    public Job() {
        this.createdAt = LocalDateTime.now();
    }

    public Job(String company, String position, String status) {
        this.company = company;
        this.position = position;
        this.status = status;
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return  id;
    }
    public String getCompany() {
        return company;
    }
    public String getPosition() {
        return position;
    }
    public String getStatus() {
        return status;
    }
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }


     public void setId(Long id) {
        this.id = id;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

}
