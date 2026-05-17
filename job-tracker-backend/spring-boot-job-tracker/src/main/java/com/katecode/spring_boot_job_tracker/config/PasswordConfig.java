package com.katecode.spring_boot_job_tracker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        // ⚠️ DEV ONLY: this means your passwords are plain text.
        // Once login works, replace this with:
        // return new BCryptPasswordEncoder();
        return NoOpPasswordEncoder.getInstance();
    }
}
