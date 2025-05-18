package com.katecode.spring_boot_job_tracker.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import java.util.Date;

@Entity
@Table(name = "interview")
@Data
public class Interview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "date")
    @CreationTimestamp
    private Date date;

    @Column(name = "type")
    private String type;

    @Column(name = "tasks")
    private String tasks;

    @Column(name = "performance_rating")
    private double performanceRating;

    @Column(name = "application_id")
    private Long applicationId;

    @Column(name = "feedback")
    private String feedback;


}
