package com.katecode.spring_boot_job_tracker.entity;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "application")
@Data
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "job_title")
    private String jobTitle;

    @Column(name = "company_name")
    private String nameOfCompany;

    @Column(name = "application_url")
    private String jobUrl;

    @Column(name = "application_date")
    private LocalDate dateApplying;

    private String jobAddResourse;

    @Column(name = "response_date")
    private LocalDate dateResponse;

    private String applicationStatus;

    @Column(name = "next_step")
    private String nextStep;

    private String notes;

    private String img;

    @JsonProperty("id")
    public Long getId() {
        return id;
    }
}
