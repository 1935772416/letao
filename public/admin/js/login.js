$(function () {
    // 1 表单校验  bootstrapValidator对表单有要求
    // 会在表单提交的时候做表单校验，如果校验失败 阻止表单提交 显示错误信息

    $("form").bootstrapValidator({
        // 配置校验规则 跟居表单中的name属性
        fields:{
            username:{
                validators:{
                    notempty:{
                        message:"用户名不能为空"
                    },
                    stringLength:{
                        min:3,
                        max:6,
                        message:"用户名长度必须是3~6位"
                    },
                    callback:{
                        message:"用户名不存在"
                    }
                }

            },
            password:{
                validators:{
                    notempty:{
                        message:"用户名不能为空"
                    },
                    stringLength:{
                        min:6,
                        max:12,
                        message:"密码长度为6~12位"
                    },
                    callback:{
                        message:"密码错误"
                    }
                }
            }
        },
        
        // 配置小图标的规则

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },


    })

//  2 给表单注册一个检验成功的事件 
   $("form").on("success.form.bv",function(e){
       e.preventDefault();//阻止浏览器默认行为

       $.ajax({ 
           type:'post',
           url:'/employee/employeeLogin',
           data:$("form").serialize(),
           success:function(info){
               console.log(info);
               if(info.error===1000){
                //    console.log($("form").data("bootstrapvalidator"))
                  $("form").data("bootstrapValidator").updateStatus("username","INVALID","callback");
               }
               if(info===1001){
                $("form").data("bootstrapValidator").updateStatus("password","INVALID","callback");
               }
                 if(info.success){
                     location.href = "index.html";
                 }

           }
       })
   })
  
//    3 点击重置按钮 需要吧类容和样式全部清空  需要调用 bootstrapValidator


    $("[type = 'reset']").on("click",function(){
        $("form").data("bootstrapValidator").resetForm(true);
    });
})
