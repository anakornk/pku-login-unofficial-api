var request = require("request");
function check(userName,password){
  var options = {
    method: 'POST',
    url: 'https://iaaa.pku.edu.cn/iaaa/oauthlogin.do',
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form: {
      appid: 'blackboard',
      userName,
      password,
      redirUrl: 'http://course.pku.edu.cn/webapps/bb-sso-bb_bb60/execute/authValidate/campusLogin'
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var res = JSON.parse(body);
    if(res.success){
      console.log("登录成功")
    }else{
      console.log(res.errors.msg);
    }
  });
}


if(process.argv.length < 4) {
  console.log("Usage: node index.js username password");
} else {
  let username = process.argv[2];
  let password = process.argv[3];
  check(username,password);
}

