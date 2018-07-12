$(function () {
    // 表单校验  bootstrapValidator对表单有要求
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


  


})
