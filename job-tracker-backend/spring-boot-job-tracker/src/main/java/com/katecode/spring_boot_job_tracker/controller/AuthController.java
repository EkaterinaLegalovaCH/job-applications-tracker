package com.katecode.spring_boot_job_tracker.controller;

import com.katecode.spring_boot_job_tracker.entity.User;
import com.katecode.spring_boot_job_tracker.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:3000", "https://job-applications-tracker-eosin.vercel.app"})

public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return authService.register(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return authService.login(user.getUserName(), user.getPassword());
    }
}
