package com.katecode.spring_boot_job_tracker.dao;

import com.katecode.spring_boot_job_tracker.entity.Interview;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface InterviewRepository extends JpaRepository<Interview, Long> {
    Page<Interview> findByApplicationId(@RequestParam("application_id") Long applicationId,
                                        Pageable pageable);
}
