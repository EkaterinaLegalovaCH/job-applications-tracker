package com.katecode.spring_boot_job_tracker.controller;

import com.katecode.spring_boot_job_tracker.entity.User;
import com.katecode.spring_boot_job_tracker.service.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return authService.register(user);
    }

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<?> login(
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            HttpSession session) {

        try {
            User user = authService.login(username, password);

            // ← ONLY CHANGE THIS LINE
            session.setAttribute("userId", user.getId());

            return ResponseEntity.ok(Map.of(
                    "message", "Login successful",
                    "username", user.getUserName()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }

    @GetMapping("/test")
    public String test() {
        return "✅ AuthController is working!";
    }
}