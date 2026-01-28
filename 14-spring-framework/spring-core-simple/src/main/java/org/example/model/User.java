package org.example.model;

import org.springframework.stereotype.Component;

@Component
public class User {
    private String name;
    private String email;

    public User() {
        this.name = "John Doe";
        this.email = "john@example.com";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{name='" + name + "', email='" + email + "'}";
    }
}