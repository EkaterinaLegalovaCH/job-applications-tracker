package com.katecode.spring_boot_job_tracker.dao;

import com.katecode.spring_boot_job_tracker.entity.Application;
import com.katecode.spring_boot_job_tracker.entity.User;
import com.katecode.spring_boot_job_tracker.entity.Interview;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByUserId(Long userId);
}
