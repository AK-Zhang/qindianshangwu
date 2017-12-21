/*
*点击提交按钮发送input输入框内的内容
**/

function submit() {

    // var layer = document.getElementsByClassName('.layer');
    var mask = document.querySelector('.mask');
    mask.style.display = 'block';

    var uName = document.querySelector('#xm'),
        uId = document.querySelector('#sfz'),
        uTel = document.querySelector('#sj'),
        uEmail = document.querySelector('#yx'),
        bankName = document.querySelector('#yh'),
        bankAcount = document.querySelector('#zh'),
        bankProvince = document.querySelector('#sheng1'),
        bankCity = document.querySelector('#shi1'),
        bankAdress = document.querySelector('#khh');
    var userInfo = {
        "姓名":uName.value,
        "身份证":uId.value,
        "手机号码":uTel.value,
        "邮箱地址":uEmail.value,
        "银行名称":bankName.value,
        "银行账号":bankAcount.value,
        "银行所在省份":bankProvince.value,
        "银行所在城市":bankCity.value,
        "开户行":bankAdress.value
    };
    var userInfos = JSON.stringify(userInfo);

    // var info2 = "";
    // for (var k in userInfo){
    //     // console.log( k +"---"+ userInfo[k] + "<br />")
    //     info2 = info2 + k +"---"+ userInfo[k] + "<br />"
    // };
    // console.log(info2);




    //步骤一:创建异步对象
    var ajax = new XMLHttpRequest();

    //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
    ajax.open('get','http://localhost:801/Home/SendMail?subject='+uName.value+'&body='+userInfos);

    //步骤三:发送请求
    ajax.send();

    //步骤四:注册事件 onreadystatechange 状态改变就会调用
    ajax.onreadystatechange = function () {
        if (ajax.readyState==4 &&ajax.status==200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // console.log(xml.responseText);//输入相应的内容

        }

        mask.style.display = 'none';
    }




    // console.log(userInfos);
    return false;


}



