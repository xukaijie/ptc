var express = require('express');

var status = require('../common/status.js');
var userTable = require('../common/user.js')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {

    var name = req.body.name;
    var password = req.body.password;


    for (var i = 0;i < userTable.userTable.length;i++){

        if (userTable.userTable[i].name == name && userTable.userTable[i].password == password){

            var ret = status.getOKdata();
            ret.data.user={}
            ret.data.user.mobile = userTable.userTable[i].mobile;
            ret.data.user.id = userTable.userTable[i].id;
            res.status(ret.status);
            res.json(ret)

        }else{

            var ret = status.getFaileddata();
            ret.message="登录失败";
            ret.status = (ret.status|status.status_login_failed)
            res.status(ret.status);
            res.json(ret)
        }
    }

});


module.exports = router;
