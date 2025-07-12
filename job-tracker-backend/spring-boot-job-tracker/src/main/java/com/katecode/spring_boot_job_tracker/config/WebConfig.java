package com.katecode.spring_boot_job_tracker.config;

import com.katecode.spring_boot_job_tracker.entity.Application;
import com.katecode.spring_boot_job_tracker.entity.Interview;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.awt.print.Book;

@Configuration
public class WebConfig implements RepositoryRestConfigurer {
    private final String[] theAllowedOrigins = {
            "http://localhost:3000",
            "https://job-applications-tracker-eosin.vercel.app"
    };

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config,
                                                     CorsRegistry cors) {
        config.exposeIdsFor(Application.class);
        config.exposeIdsFor(Interview.class);

        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(theAllowedOrigins)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
