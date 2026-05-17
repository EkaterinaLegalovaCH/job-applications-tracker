package com.katecode.spring_boot_job_tracker.controller;

import com.katecode.spring_boot_job_tracker.dao.ApplicationRepository;
import com.katecode.spring_boot_job_tracker.entity.Application;
import com.katecode.spring_boot_job_tracker.entity.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationRepository applicationRepository;

    @PostMapping
    public ResponseEntity<?> createApplication(@RequestBody Application application, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        System.out.println("=== CREATE APPLICATION - userId from session: " + userId);

        // TEMPORARY BYPASS - so you can add applications while we fix session
        if (userId == null) {
            System.out.println("=== TEMPORARY BYPASS: creating application without user (for testing)");
            // still set a dummy user if needed, or let it be null for now
        } else {
            User currentUser = new User();
            currentUser.setId(userId);
            application.setUser(currentUser);
        }

        Application savedApp = applicationRepository.save(application);
        return new ResponseEntity<>(savedApp, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getUserApplications(HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        System.out.println("=== GET APPLICATIONS - userId from session: " + userId);

        // TEMPORARY BYPASS - return ALL applications so we can test the frontend
        if (userId == null) {
            System.out.println("=== TEMPORARY BYPASS: returning ALL applications (session not found)");
            List<Application> allApps = applicationRepository.findAll();
            return ResponseEntity.ok(allApps);
        }

        List<Application> userApps = applicationRepository.findByUserId(userId);
        System.out.println("=== Found " + userApps.size() + " applications for user " + userId);

        return ResponseEntity.ok(userApps);
    }
}