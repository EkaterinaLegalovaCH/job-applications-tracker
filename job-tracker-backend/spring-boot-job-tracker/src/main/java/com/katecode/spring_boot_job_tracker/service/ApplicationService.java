package com.katecode.spring_boot_job_tracker.service;

import com.katecode.spring_boot_job_tracker.entity.Application;
import com.katecode.spring_boot_job_tracker.entity.User;
import com.katecode.spring_boot_job_tracker.dao.ApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {
    private final ApplicationRepository applicationRepository;

    private ApplicationService(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public List<Application> getApplicationsForUser(User user) {
        return applicationRepository.findByUserId(user.getId());
    }

    public Application addApplicationForUser(User user, Application app) {
        app.setUser(user);
        return applicationRepository.save(app);
    }

}
