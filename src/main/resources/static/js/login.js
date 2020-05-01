$("#lgbtn").click(function () {
    $.ajax({
        type:"POST",
        url:"users/login",
        data:$("#bsform").serialize(),
        success:function (data) {
            if (data=="登录成功"){
                document.getElementById("loginFrame").style.display="none";
                document.getElementById("imgFrame").style.display="inline";
            }else{
                alert(data);
            }


        },
        error:function (err) {
            console.log(err.status);
            console.log(err.responseText);
        }
    });

});