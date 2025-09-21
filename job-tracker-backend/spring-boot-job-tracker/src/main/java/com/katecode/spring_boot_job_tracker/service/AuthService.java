package com.katecode.spring_boot_job_tracker.service;

import com.katecode.spring_boot_job_tracker.dao.UserRepository;
import com.katecode.spring_boot_job_tracker.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        if (userRepository.findByUserName(user.getUserName()).isPresent()) {
            throw new RuntimeException("Username already exists.");
        }
        return userRepository.save(user);
    }

    public User login(String userName, String password) {
        User existingUser = userRepository.findByUserName(userName)
                .orElseThrow(() -> new RuntimeException("User is not found"));
        if (!existingUser.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password.");
        }

        return existingUser;
    }
}
