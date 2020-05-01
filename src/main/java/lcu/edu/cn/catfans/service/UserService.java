package lcu.edu.cn.catfans.service;

import lcu.edu.cn.catfans.dao.UserDao;
import lcu.edu.cn.catfans.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;
    public String login(User user){
        String msg=null;
        User user_db=userDao.selectByAcc(user);
        if(user_db==null){
            msg="用户不存在";
        }else{
            if(user_db.getPassword().equals(user.getPassword())){
                msg="登录成功";
            }else{
                msg="密码输入错误";
            }
        }
        return msg;
    }
}
