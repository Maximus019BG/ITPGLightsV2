package com.example.ITPGL.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.MongoTemplate;
import java.util.List;


@Service
public class UserService {

    @Autowired
    private MongoTemplate mongoTemplate;


  public List<User> insertUser() {

    String password = "myPassword";


    User user = new User( "Jane Doe", "jane@doe.mail", password, 30);
    mongoTemplate.save(user);
    return List.of(user);
}
}