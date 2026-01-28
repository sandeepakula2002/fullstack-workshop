package org.example.service;

import org.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final User user;

    @Autowired
    public UserServiceImpl(User user) {
        this.user = user;
    }

    @Override
    public void processUser() {
        System.out.println("Processing user: " + user.getName());
        user.setName("Jane Doe (Updated)");
    }

    @Override
    public User getUser() {
        return user;
    }
}