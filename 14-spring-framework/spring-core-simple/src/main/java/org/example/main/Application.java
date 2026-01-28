package org.example.main;

import org.example.config.AppConfig;
import org.example.model.User;
import org.example.service.UserService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Application {
    public static void main(String[] args) {
        System.out.println("=== Starting Spring Core Application ===");

        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        UserService userService = context.getBean(UserService.class);

        System.out.println("Before processing:");
        System.out.println("User: " + userService.getUser());

        userService.processUser();

        System.out.println("\nAfter processing:");
        System.out.println("User: " + userService.getUser());

        System.out.println("\n=== Directly accessing User bean ===");
        User userBean = context.getBean(User.class);
        System.out.println("User bean from context: " + userBean);

        System.out.println("\n=== Checking bean scope ===");
        System.out.println("Same instance? " + (userService.getUser() == userBean));

        System.out.println("\n=== Application Completed ===");
    }
}