package com.katecode.spring_boot_job_tracker.dao;

import com.katecode.spring_boot_job_tracker.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

}
