package lcu.edu.cn.catfans.dao;

import lcu.edu.cn.catfans.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserDao {
    @Select("SELECT * FROM user where account=#{acc}")
    public User selectByAcc(User user);
}
