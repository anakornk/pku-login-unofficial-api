# PKU Login
北京大学登录 Unofficial API
- 可以用来判断用户名(学号）是否存在
- 可以用来判断用户名对应的密码是否正确
<img width="645" alt="screen shot 2017-10-20 at 1 19 29 am" src="https://user-images.githubusercontent.com/8156002/31784697-45b0068e-b4c8-11e7-9377-747e8f2dba36.png">

### 对应的CURL
```
curl -X POST \
  https://iaaa.pku.edu.cn/iaaa/oauthlogin.do \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'appid=blackboard&userName=SOMEUSERNAME&password=SOMEPASSWORD&redirUrl=http%3A%2F%2Fcourse.pku.edu.cn%2Fwebapps%2Fbb-sso-bb_bb60%2Fexecute%2FauthValidate%2FcampusLogin'
```

### 使用方法:  
```
node index.js USERNAME PASSWORD  
```
比如
```
node index.js 1400012345 helloworld
```
