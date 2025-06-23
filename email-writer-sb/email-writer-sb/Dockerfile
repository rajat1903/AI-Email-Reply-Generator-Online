# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package
COPY target/email-writer-sb-*.jar app.jar

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]