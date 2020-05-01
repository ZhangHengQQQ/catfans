package lcu.edu.cn.catfans.controller;

import lcu.edu.cn.catfans.pojo.User;
import lcu.edu.cn.catfans.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("users")
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping("login")
    public String login(User user){
        return userService.login(user);
    }
}
