$(function () {
    // 表单校验  bootstrapValidator对表单有要求
    // 会在表单提交的时候做表单校验，如果校验失败 阻止表单提交 显示错误信息

    $("form").bootstrapValidator({
        fileds:{
            username:{

            },
            password:{
                
            }
        }
    })




})
