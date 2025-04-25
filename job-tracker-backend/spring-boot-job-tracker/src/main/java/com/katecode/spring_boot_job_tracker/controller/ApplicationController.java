package com.katecode.spring_boot_job_tracker.controller;

import com.katecode.spring_boot_job_tracker.dao.ApplicationRepository;
import com.katecode.spring_boot_job_tracker.entity.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/applications")
@CrossOrigin(origins = "http:localhost:3000")
public class ApplicationController {

    @Autowired
    private ApplicationRepository applicationRepository;

    @PostMapping
    public ResponseEntity<Application> createApplication(@RequestBody Application application) {
        Application savedApp = applicationRepository.save(application);
        return new ResponseEntity<>(savedApp, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAllApplications() {
        return ResponseEntity.ok(applicationRepository.findAll());
    }
}
