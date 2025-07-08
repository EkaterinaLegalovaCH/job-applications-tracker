# Build stage
FROM eclipse-temurin:17-jdk AS builder

WORKDIR /app

# Copy everything
COPY . .

# ✅ Give Maven wrapper permission to execute
RUN chmod +x mvnw

# Build the application
RUN ./mvnw clean package -DskipTests

# Run stage
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy the built JAR from the builder stage
COPY --from=builder /app/target/spring-boot-job-tracker-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
