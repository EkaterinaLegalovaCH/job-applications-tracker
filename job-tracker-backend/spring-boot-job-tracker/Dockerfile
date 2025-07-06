# Use OpenJDK base image compatible with Java 17
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy the built jar from the target directory
COPY target/spring-boot-job-tracker-0.0.1-SNAPSHOT.jar app.jar

# Expose the app port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]